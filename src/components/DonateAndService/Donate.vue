<script setup lang="ts">
import { menus } from '@/utils/menu';
import Button from '@/components/Global/Button.vue';

const sectionId = menus.donate.id;
</script>

<template>
  <div :id="`${sectionId}`" class="donate-card">
    <div class="theme-card-title">小額支持喵喵</div>
    <div class="theme-card-subtitle">
      您的小筆捐款，是每隻毛孩未來的大大動力！
    </div>
    <div class="theme-card-content">
      <Button type="white" postfix="arrow" width="150px">小額捐款</Button>

      <div class="theme-card-image">
        <img src="../../assets/images/donate.png" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.donate-card {
  @include theme-card();
  background-color: $color-theme;
  flex: 1;

  @include mobile {
    .theme-card-image {
      img {
        max-width: 135px;
      }
    }
  }
}
</style>
