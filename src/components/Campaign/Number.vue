<script setup lang="ts">
import useMetaInfo from '@/hooks/useMetaInfo';

const { metaInfo } = useMetaInfo();
</script>
<template>
  <div class="campaign-num">
    <div>{{ metaInfo.number }}</div>
  </div>
</template>

<style lang="scss" scoped>
.campaign-num {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  width: 50px;
  background: $color-gradient;
  color: white;
  font-size: 32px;
  border-radius: 100%;
}
</style>
