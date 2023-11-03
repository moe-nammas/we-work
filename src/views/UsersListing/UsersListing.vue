<template>
  <div class="wrapper" v-if="usersList">
    <div class="cards-pagination">
      <div class="cards-container">
        <Card
          v-for="(user, idx) in usersList"
          :key="idx"
          :user="user"
          :cells="cells"
          @handleCardClick="handleCardClick"
        />
      </div>
      <Pagination
        @handlePageChange="handlePageChange"
        :currentPage="currentPage"
      />
    </div>
    <Map :coordinates="coordinates" />
  </div>
</template>
<script>
import Card from '../../components/card/Card.vue';
import { usersApis } from '../../utils/apis';
import Map from '../../components/map/Map.vue';
import { resolveCoordinates } from '@/utils/resolvers';
import Pagination from '../../components/pagination/Pagination.vue';

export default {
  components: {
    Card,
    Map,
    Pagination,
  },
  created() {
    this.fetchUsers(this.currentPage);
  },
  methods: {
    async fetchUsers(page) {
      const { data } = await usersApis.getUsers(page);
      this.usersList = data.results;
      this.coordinates = resolveCoordinates(
        this.usersList[0].location.coordinates
      );
    },
    handleCardClick(coordinates) {
      this.coordinates = resolveCoordinates(coordinates);
    },
    handlePageChange(page) {
      this.currentPage = page;
    },
  },
  watch: {
    currentPage() {
      this.fetchUsers(this.currentPage);
    },
  },
  data: () => ({
    usersList: null,
    coordinates: [],
    currentPage: 1,
    cells: [
      {
        key: 'name',
      },
      {
        key: 'email',
      },
      {
        key: 'gender',
      },
      {
        key: 'location',
        label: 'country',
      },
      {
        key: 'dob',
      },
    ],
  }),
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  .cards-pagination {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    .cards-container {
      display: flex;
      flex-direction: column;
      height: 40rem;
      overflow: auto;
      padding-block: 1rem;
      gap: 1rem;
    }
  }
}
</style>
