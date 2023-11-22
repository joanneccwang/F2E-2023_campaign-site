<script setup lang="ts">
import useMetaInfo from '@/hooks/useMetaInfo';
import { PropType } from 'vue';
const { metaInfo } = useMetaInfo();

defineProps({
  type: {
    type: String as PropType<'default'>,
    default: 'default',
  },
  lineHeight: {
    type: String,
    default: '1em',
  },
});
</script>

<template>
  <div class="slogan" :style="{ lineHeight }">
    <div v-for="slogan in metaInfo.slogan">{{ slogan }}</div>
  </div>
</template>

<style lang="scss" scoped>
.slogan {
  font-family: Mantou;
  font-size: 96px;
  line-height: 1em;
  background: $color-gradient;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-align: center;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  column-gap: 48px;
}
</style>
