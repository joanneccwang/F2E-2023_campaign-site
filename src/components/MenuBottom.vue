<script setup lang="ts">
import { ref, inject } from 'vue';

import useScrollToSection from '@/hooks/useScrollToSection';
import { menus } from '@/utils/menu';
import { deviceTypeKey, shouldBreakHeaderKey } from '@/utils/injectionKeys';
import Icon from '@/components/Global/Icon.vue';

const { scrollToSection } = useScrollToSection();
const menuList = ref(Object.values(menus));

const deviceType = inject(deviceTypeKey);
const shouldBreakHeader = inject(shouldBreakHeaderKey);
</script>

<template>
  <div id="menu-bottom" v-if="deviceType !== 'Desktop' || shouldBreakHeader">
    <div
      v-for="menu in menuList"
      class="menu_button"
      @click="scrollToSection(menu.id)"
    >
      <Icon :name="menu.icon"></Icon>
      <div>{{ menu.title }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#menu-bottom {
  position: sticky;
  bottom: 0px;
  z-index: 1;

  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: white;

  gap: $pd-base;
  padding: 0px $pd-base;

  .menu_button {
    flex: 1;
    padding: $pd-s $pd-minor;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $pd-minor;

    cursor: pointer;

    @include mobile {
      font-size: $font-minor;
      padding: $pd-s 0px;
    }
  }
}
</style>
