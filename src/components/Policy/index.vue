<script setup lang="ts">
import PageTitle from '@/components/Layout/PageTitle.vue';
import { menus } from '@/utils/menu';

const sectionId = menus.policy.id;
</script>

<template>
  <section :id="`${sectionId}`">
    <div id="policy-issue">
      <div class="advocate-content">
        <PageTitle tag="POLICY ISSUES" title="政策議題"></PageTitle>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  @include section-layout();

  background-color: $bg-theme-1;

  display: flex;
  align-items: center;
  justify-content: center;
  #policy-issue {
    @include section-content-layout();
  }
}
</style>
