<script setup lang="ts">
import { PropType } from 'vue';
import Icon from '@/components/Global/Icon.vue';

defineProps({
  type: {
    type: String as PropType<'default' | 'primary' | 'white'>,
    default: 'default',
  },
  postfix: {
    type: String as PropType<'' | 'arrow'>,
    default: '',
  },
  width: {
    type: String,
    default: '120px',
  },
});
</script>

<template>
  <div class="button" :class="`button-${type}`" :style="{ width }">
    <slot></slot>
    <Icon
      v-if="postfix === 'arrow'"
      name="arrow_forward"
      class="postfix-icon"
    ></Icon>
  </div>
</template>

<style lang="scss" scoped>
.button {
  width: auto;
  width: 120px;
  flex: 0 0 auto;
  border-radius: 500px;
  border: 1px solid white;

  font-weight: 600;
  padding: $pd-sm $pd-md;

  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: center;

  &.button-default {
    background-color: $gray-100;
    color: $text-primary;
  }
  &.button-white {
    background-color: white;
    color: $text-primary;
  }
  &.button-primary {
    background-color: $color-theme;
    color: white;
  }

  .postfix-icon {
    margin-left: $pd-base;
  }
}
</style>
