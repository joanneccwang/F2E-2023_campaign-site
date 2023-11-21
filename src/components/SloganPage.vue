<script setup lang="ts">
import FullNameTag from '@/components/Campaign/FullNameTag.vue';
import Slogan from '@/components/Campaign/Slogan.vue';
</script>

<template>
  <section>
    <div id="slogan-page">
      <Slogan lineHeight="1.5em"></Slogan>
      <div id="info">
        <FullNameTag></FullNameTag>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  @include section-layout();
}
#slogan-page {
  @include section-content-layout();
  margin: 0px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  #info {
    margin-top: $pd-sm;
  }
}
</style>
