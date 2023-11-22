<script setup lang="ts">
import { inject } from 'vue';

import { deviceTypeKey } from '@/utils/injectionKeys';
const deviceType = inject(deviceTypeKey);
</script>
<template>
  <h3 v-if="deviceType === 'Desktop'" class="campaign-position">
    2024 立委參選人
  </h3>
  <h5 v-else class="campaign-position">2024 立委參選人</h5>
</template>

<style lang="scss" scoped>
.campaign-position {
  border-radius: 16px;
  background: $text-primary;
  color: white;
  padding: $pd-s $pd-sm;
}
</style>
