<script setup lang="ts">
import { menus } from '@/utils/menu';

const sectionId = menus.donate.id;
</script>

<template>
  <div :id="`${sectionId}`" class="donate-card">
    <div class="theme-card-title">小額支持喵喵</div>
    <div class="theme-card-subtitle">
      您的小筆捐款，是每隻毛孩未來的大大動力！
    </div>
    <div class="theme-card-content">
      <div class="theme-card-btn">
        小額捐款
        <img src="../assets/icons/arrow_forward.svg" />
      </div>
      <div class="theme-card-image">
        <img src="../assets/images/donate.png" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.donate-card {
  @include theme-card();
  background-color: $color-theme;
  flex: 1;
}
</style>
