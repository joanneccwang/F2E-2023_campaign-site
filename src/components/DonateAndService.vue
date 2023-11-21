<script setup lang="ts">
import Donate from './Donate.vue';
import Service from './Service.vue';
</script>

<template>
  <section>
    <div id="donate-and-service-block">
      <Donate></Donate>
      <Service></Service>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  @include section-layout();
  background-color: white;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  #donate-and-service-block {
    @include section-content-layout();
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: $pd-md;
  }
}
</style>
