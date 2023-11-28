<script setup lang="ts">
import { menus } from '@/utils/menu';
import Button from '@/components/Global/Button.vue';

const sectionId = menus.email.id;
</script>

<template>
  <div :id="`${sectionId}`" class="email-card">
    <div class="theme-card-title">民眾服務信箱</div>
    <div class="theme-card-subtitle">
      親愛的鄉親，每一位市民的意見都是我們社區前進的原動力
    </div>
    <div class="theme-card-content">
      <Button type="white" postfix="arrow" width="150px">填寫表單</Button>

      <div class="theme-card-image">
        <img src="../../assets/images/email.png" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.email-card {
  @include theme-card();
  background-color: $text-primary;
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
