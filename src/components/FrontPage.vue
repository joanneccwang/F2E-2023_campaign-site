<script setup lang="ts">
import useMetaInfo from '@/hooks/useMetaInfo';
import PositionTag from '@/components/Campaign/PositionTag.vue';
import FullNameTag from '@/components/Campaign/FullNameTag.vue';

const { metaInfo } = useMetaInfo();
</script>
<template>
  <section>
    <div id="slogan">{{ metaInfo.slogan }}</div>
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

  #slogan {
    font-family: Mantou;
    font-size: 96px;
    line-height: 1em;
    background: $color-gradient;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    margin-bottom: $pd-sm;
  }

  #info {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: $pd-sm;
    margin-bottom: $pd-sm;
  }

  #public-image {
    margin-top: $pd-base;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    height: 538px;
    .public-image-back {
    }
    .public-image-front {
      position: absolute;
    }
  }
}
</style>
