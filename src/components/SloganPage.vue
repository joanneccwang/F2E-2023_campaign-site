<script setup lang="ts">
import useMetaInfo from '@/hooks/useMetaInfo';
import FullNameTag from '@/components/Campaign/FullNameTag.vue';

const { metaInfo } = useMetaInfo();
</script>

<template>
  <section>
    <div id="slogan-page">
      <div id="slogan">{{ metaInfo.slogan }}</div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  #slogan {
    @include slogan-style();
    line-height: 1.5em;
    margin-bottom: $pd-sm;
  }
}
</style>
