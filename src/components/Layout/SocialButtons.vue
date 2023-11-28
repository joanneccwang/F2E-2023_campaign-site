<script setup lang="ts">
import Icon from '@/components/Global/Icon.vue';
</script>

<template>
  <div id="social-buttons">
    <div class="social_button">
      <Icon name="social_fb"></Icon>
    </div>
    <div class="social_button">
      <Icon name="social_ig"></Icon>
    </div>
    <div class="social_button">
      <Icon name="social_youtube"></Icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#social-buttons {
  flex: 0 0 auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  @include mobile {
    border-radius: 12px;
    background: white;

    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
    padding: $pd-base 40px;
  }

  .social_button {
    padding: 2px;
    cursor: pointer;

    display: flex;
    align-items: center;
  }
}
</style>
