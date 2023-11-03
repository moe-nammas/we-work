<template>
  <div
    class="card-container"
    @click="$emit('handleCardClick', user.location.coordinates)"
  >
    <Cell
      v-for="(item, idx) in cells"
      :key="idx"
      :itemKey="item.key"
      :label="item?.label ?? item.key"
      :value="user[item.key]"
    />
  </div>
</template>
<script>
import Cell from './Cell.vue';

export default {
  name: 'Card',
  props: ['user', 'cells'],
  components: { Cell },
};
</script>
<style lang="scss" scoped>
.card-container {
  border-left: 4px solid lightgray;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 8px;
  padding: 1rem;
  min-width: 30rem;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: fit-content;

  &:hover {
    border-left: 4px solid #124c83;
    cursor: pointer;
  }
}
</style>
