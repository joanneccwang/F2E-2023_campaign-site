<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
  title: { type: String, required: true },
  image: { type: String, required: true },
  tag: {
    type: Object as PropType<{ tag: string; color: string }>,
    required: true,
  },
});
</script>

<template>
  <div class="policy-card">
    <div class="policy-image">
      <img :src="image" />
    </div>
    <div class="policy-detail">
      <div class="policy-tag" :style="{ backgroundColor: tag?.color }">
        {{ tag?.tag }}
      </div>
      <h4 class="policy-title" v-html="title"></h4>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.policy-card {
  flex: 0 0 330px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  background: white;
  border-radius: 32px;
  padding: $pd-lg;

  cursor: pointer;

  .policy-image {
    flex: 0 0 auto;
    padding-bottom: $pd-md;
    img {
      width: 100%;
      border-radius: 24px;
    }
  }

  .policy-detail {
    flex: 1;
    display: flex;
    flex-direction: column;
    .policy-tag {
      align-self: flex-start;
      border-radius: 500px;
      font-size: $font-sm;
      padding: $pd-minor $pd-s;
      margin-bottom: $pd-sm;
    }
    .policy-title {
      font-weight: 700;
    }
  }
}
</style>
