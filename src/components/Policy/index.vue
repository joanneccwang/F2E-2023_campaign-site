<script setup lang="ts">
import PageTitle from '@/components/Layout/PageTitle.vue';
import PolicyCard from '@/components/Policy/PolicyCard.vue';
import { menus } from '@/utils/menu';
import { policies } from '@/utils/policy';

const sectionId = menus.policy.id;
</script>

<template>
  <section :id="`${sectionId}`">
    <div id="policy-issue">
      <PageTitle tag="POLICY ISSUES" title="政策議題"></PageTitle>

      <div class="policy-content">
        <PolicyCard
          v-for="policy in policies"
          :title="policy.title"
          :image="policy.img"
          :tag="{ tag: policy.tag, color: policy.tagColor }"
        ></PolicyCard>
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
    overflow: hidden;
  }
}

#policy-issue {
  .policy-content {
    margin-top: $spacing-md;
    display: flex;
    flex-direction: row;

    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    gap: $pd-md;
  }
}
</style>
