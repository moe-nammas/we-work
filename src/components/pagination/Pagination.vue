<template>
  <div class="pagination-container">
    <div
      @click="$emit('handlePageChange', page)"
      class="page"
      :class="{ selected: currentPage === page }"
      v-for="(page, idx) in pages"
      :key="idx"
    >
      {{ page }}
    </div>
  </div>
</template>
<script>
export default {
  props: ['currentPage'],
  data: () => ({
    pages: [1, 2, 3, 4, 5],
  }),
};
</script>
<style lang="scss" scoped>
.pagination-container {
  display: flex;
  gap: 10px;

  .page {
    font-size: 24px;
    width: 1rem;
    height: 1rem;
    border: 2px solid lightgray;
    border-radius: 50%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      cursor: pointer;
      border: 2px solid #124c83;
    }
  }

  .selected {
    border: 2px solid #124c83;
  }
}
</style>
