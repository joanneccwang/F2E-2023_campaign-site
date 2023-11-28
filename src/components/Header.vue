<script setup lang="ts">
import { ref, inject } from 'vue';
import Icon from '@/components/Global/Icon.vue';
import SocialButtons from '@/components/Layout/SocialButtons.vue';
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
        <Icon name="logo"></Icon>
        <h5 v-if="deviceType === 'Mobile'" id="logo_title">
          {{ metaInfo.fullName }}
        </h5>
        <h4 v-else id="logo_title">{{ metaInfo.fullName }}</h4>
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
      <SocialButtons v-if="deviceType !== 'Mobile'"></SocialButtons>
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

  @include mobile {
    position: relative;
    padding: $pd-s $pd-sm;
  }
}
#header_inner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 24px;

  background: white;
  border-radius: 12px;

  @include mobile {
    padding: 0px;
  }
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
</style>
