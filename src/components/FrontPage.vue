<script setup lang="ts">
import { inject } from 'vue';
import Slogan from './Campaign/Slogan.vue';
import PositionTag from '@/components/Campaign/PositionTag.vue';
import FullNameTag from '@/components/Campaign/FullNameTag.vue';
import SocialButtons from '@/components/Layout/SocialButtons.vue';
import { deviceTypeKey } from '@/utils/injectionKeys';

const deviceType = inject(deviceTypeKey);
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
    <SocialButtons
      v-if="deviceType === 'Mobile'"
      class="social-button-fix"
    ></SocialButtons>
  </section>
</template>

<style lang="scss" scoped>
section {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: $spacing-lg;

  @include pad {
    padding-top: $pd-lg;
  }
  #info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: $pd-sm;
    row-gap: $pd-base;
    margin: $pd-sm 0px;
  }

  #public-image {
    margin-top: $pd-base;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    height: 538px;

    @include pad {
      height: 255px;
    }

    .public-image-front {
      position: absolute;
      height: 100%;
    }
    .public-image-back {
      max-width: 723px;

      @include pad {
        max-width: 343px;
      }
    }
  }

  .social-button-fix {
    position: absolute;
    bottom: 20px;
  }
}
</style>
