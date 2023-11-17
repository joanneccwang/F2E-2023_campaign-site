<script setup lang="ts">
import Header from '@/components/Header.vue';
import FrontPage from '@/components/FrontPage.vue';
import NewsTicker from './components/NewsTicker.vue';
import Advocate from './components/Advocate.vue';
import LatestEvents from './components/LatestEvents.vue';
</script>

<template>
  <div>
    <Header></Header>
    <FrontPage></FrontPage>
    <NewsTicker></NewsTicker>
    <Advocate></Advocate>
    <LatestEvents></LatestEvents>
  </div>
</template>

<style lang="scss" scoped></style>
