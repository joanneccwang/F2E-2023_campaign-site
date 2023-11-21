<script setup lang="ts">
import Header from '@/components/Header.vue';
import FrontPage from '@/components/FrontPage.vue';
import NewsTicker from '@/components/NewsTicker.vue';
import Advocate from '@/components/Advocate.vue';
import LatestEvents from '@/components/LatestEvents.vue';
import Policy from '@/components/Policy/index.vue';
import DonateAndService from '@/components/DonateAndService/index.vue';
import SloganPage from '@/components/SloganPage.vue';
import Footer from '@/components/Footer.vue';
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
  </div>
</template>

<style lang="scss" scoped></style>
