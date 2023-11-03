<template>
  <div class="cell">
    <div class="attribute">{{ label }}:</div>
    <div class="cell-data">{{ resolveValue(itemKey, value) }}</div>
  </div>
</template>
<script>
import { resolveValue } from '@/utils/resolvers';

export default {
  name: 'Cell',
  props: ['itemKey', 'value', 'label'],
  methods: {
    resolveValue: resolveValue,
  },
};
</script>
<style lang="scss" scoped>
.card-container {
  .cell {
    display: flex;
    gap: 8px;
    align-items: center;
    .attribute {
      font-size: 18px;
      font-weight: 600;
      text-transform: capitalize;
    }

    .cell-data {
      font-size: 16px;
    }
  }
}
</style>
