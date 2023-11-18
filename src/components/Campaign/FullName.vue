<script setup lang="ts">
import { PropType, defineProps } from 'vue';
import useMetaInfo from '@/hooks/useMetaInfo';

import Number from './Number.vue';

const { metaInfo } = useMetaInfo();

defineProps({
  size: {
    type: String as PropType<'lg' | 'md'>,
    default: 'lg',
  },
});
</script>
<template>
  <div class="campaign-fullname">
    <Number :size="size"></Number>
    <template v-if="size === 'lg'">
      <h1 class="campaign-title">{{ metaInfo.fullName }}</h1>
    </template>
    <template v-else-if="size === 'md'">
      <h3 class="campaign-title">{{ metaInfo.fullName }}</h3>
    </template>
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
