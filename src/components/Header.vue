<script setup lang="ts">
import { ref, inject } from 'vue';
import useMetaInfo from '@/hooks/useMetaInfo.ts';
import useScrollToSection from '@/hooks/useScrollToSection';
import { menus } from '@/utils/menu';
import { deviceTypeKey, shouldBreakHeaderKey } from '@/utils/injectionKeys';

const { metaInfo } = useMetaInfo();
const { scrollToSection } = useScrollToSection();

const menuList = ref(Object.values(menus));

const deviceType = inject(deviceTypeKey);
const shouldBreakHeader = inject(shouldBreakHeaderKey);
</script>

<template>
  <div id="header">
    <div id="header_inner">
      <!-- logo -->
      <div id="header_logo">
        <img src="../assets/icons/logo.svg" />
        <h4 id="logo_title">{{ metaInfo.fullName }}</h4>
      </div>
      <!-- menu -->
      <div
        v-if="deviceType === 'Desktop' && !shouldBreakHeader"
        id="header_menu"
      >
        <div
          v-for="menu in menuList"
          class="menu_button"
          @click="scrollToSection(menu.id)"
        >
          {{ menu.title }}
        </div>
      </div>
      <!-- social media -->
      <div id="header_social">
        <div class="social_button">
          <img src="../assets/icons/social_fb.svg" />
        </div>
        <div class="social_button">
          <img src="../assets/icons/social_ig.svg" />
        </div>
        <div class="social_button">
          <img src="../assets/icons/social_youtube.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#header {
  padding: 16px 24px;
  background: $bg-theme-2;

  position: -webkit-sticky;
  position: sticky;
  top: 0;

  z-index: 1;
}
#header_inner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 24px;

  background: white;
  border-radius: 12px;
}
#header_logo {
  flex: 0 0 auto;

  display: flex;
  flex-direction: row;
  align-items: center;

  #logo_title {
    margin-left: 8px;
    font-weight: bold;
    color: $color-theme;
  }
}

#header_menu {
  flex: 1;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;

  .menu_button {
    flex: 0 0 auto;
    padding: 8px;
    cursor: pointer;
    color: $text-primary;
    font-size: $font-base;
  }
}

#header_social {
  flex: 0 0 auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  .social_button {
    padding: 2px;
    cursor: pointer;

    display: flex;
    align-items: center;
  }
}
</style>
