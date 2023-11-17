<script setup lang="ts">
import useMetaInfo from '@/hooks/useMetaInfo';

import Number from './Number.vue';

const { metaInfo } = useMetaInfo();
</script>
<template>
  <div class="campaign-fullname">
    <Number></Number>
    <h1 class="campaign-title">{{ metaInfo.fullName }}</h1>
  </div>
</template>

<style lang="scss" scoped>
.campaign-fullname {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: $pd-sm;

  .campaign-title {
    color: $color-theme;
  }
}
</style>
