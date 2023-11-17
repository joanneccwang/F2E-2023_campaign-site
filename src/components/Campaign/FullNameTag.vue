<script setup lang="ts">
import FullName from './FullName.vue';
</script>
<template>
  <div class="tag-fullName">
    <FullName></FullName>
  </div>
</template>

<style lang="scss" scoped>
.tag-fullName {
  display: flex;
  flex-direction: row;
  align-items: center;

  box-shadow: $box-shadow;
  border-radius: 16px;

  padding: $pd-s $pd-sm;
}
</style>
