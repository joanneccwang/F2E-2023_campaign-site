<script setup lang="ts">
import Slogan from './Campaign/Slogan.vue';
import PositionTag from '@/components/Campaign/PositionTag.vue';
import FullNameTag from '@/components/Campaign/FullNameTag.vue';
</script>
<template>
  <section>
    <Slogan></Slogan>
    <div id="info">
      <PositionTag></PositionTag>
      <FullNameTag></FullNameTag>
    </div>
    <div id="public-image">
      <img
        class="public-image-back"
        src="../assets/images/public-image-back.png"
      />
      <img
        class="public-image-front"
        src="../assets/images/public-image-front.png"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: $spacing-lg;

  #info {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: $pd-sm;
    margin: $pd-sm 0px;
  }

  #public-image {
    margin-top: $pd-base;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    height: 538px;

    .public-image-front {
      position: absolute;
    }
  }
}
</style>
