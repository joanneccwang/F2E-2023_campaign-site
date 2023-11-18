<script setup lang="ts">
import { defineProps, computed, PropType } from 'vue';
import useMetaInfo from '@/hooks/useMetaInfo';

const { metaInfo } = useMetaInfo();

const props = defineProps({
  size: {
    type: String as PropType<'lg' | 'md'>,
    default: 'lg',
  },
});
const numberStyle = computed(() => {
  if (props.size === 'lg')
    return {
      fontSize: '32px',
      height: '50px',
      width: '50px',
    };
  else if (props.size === 'md') {
    return {
      fontSize: '20px',
      height: '32px',
      width: '32px',
    };
  }
});
</script>
<template>
  <div class="campaign-num" :style="numberStyle">
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
