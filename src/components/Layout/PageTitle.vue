<script setup lang="ts">
import { defineProps } from 'vue';
import LayoutTag from '@/components/Layout/Tag.vue';
import LayoutTitle from '@/components/Layout/Title.vue';

defineProps({
  tag: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="page-title">
    <LayoutTag>{{ tag }}</LayoutTag>
    <LayoutTitle>{{ title }}</LayoutTitle>
  </div>
</template>

<style lang="scss" scoped>
.page-title {
  display: flex;
  flex-direction: column;
}
</style>
