<script setup lang="ts">
import { computed, provide } from 'vue';
import { useMediaQuery } from '@vueuse/core';

import { deviceTypeKey, shouldBreakHeaderKey } from '@/utils/injectionKeys';
import { DeviceType } from '@/utils/typings';

import Header from '@/components/Header.vue';
import FrontPage from '@/components/FrontPage.vue';
import NewsTicker from '@/components/NewsTicker.vue';
import Advocate from '@/components/Advocate.vue';
import LatestEvents from '@/components/LatestEvents.vue';
import Policy from '@/components/Policy/index.vue';
import DonateAndService from '@/components/DonateAndService/index.vue';
import SloganPage from '@/components/SloganPage.vue';
import Footer from '@/components/Footer.vue';
import MenuBottom from './components/MenuBottom.vue';

const isMobile = useMediaQuery('(max-width: 576px)');
const isTablet = useMediaQuery('(max-width: 768px)');
const shouldBreakHeader = useMediaQuery('(max-width: 1100px)');

const deviceType = computed<DeviceType>(() => {
  if (isMobile.value) return 'Mobile';
  else if (isTablet.value) return 'Tablet';
  return 'Desktop';
});
provide(deviceTypeKey, deviceType);
provide(shouldBreakHeaderKey, shouldBreakHeader);
</script>

<template>
  <div>
    <Header></Header>
    <FrontPage></FrontPage>
    <NewsTicker></NewsTicker>
    <Advocate></Advocate>
    <LatestEvents></LatestEvents>
    <Policy></Policy>
    <DonateAndService></DonateAndService>
    <SloganPage></SloganPage>
    <Footer></Footer>
    <MenuBottom></MenuBottom>
  </div>
</template>

<style lang="scss" scoped></style>
