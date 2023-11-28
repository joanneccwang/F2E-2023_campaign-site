<script setup lang="ts"></script>

<template>
  <div id="social-buttons">
    <div class="social_button">
      <img src="../../assets/icons/social_fb.svg" />
    </div>
    <div class="social_button">
      <img src="../../assets/icons/social_ig.svg" />
    </div>
    <div class="social_button">
      <img src="../../assets/icons/social_youtube.svg" />
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
