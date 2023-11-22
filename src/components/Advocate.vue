<script setup lang="ts">
import { inject } from 'vue';

import PageTitle from '@/components/Layout/PageTitle.vue';
import { deviceTypeKey } from '@/utils/injectionKeys';
import { menus } from '@/utils/menu';

const sectionId = menus.advocate.id;

const deviceType = inject(deviceTypeKey);
const advocate = `我堅信 ! 藉由推動更完善的<span class="point">貓咪福利</span
            >和相關政策，更是間接地投資於<span class="point">台灣的未來</span>。`;
</script>

<template>
  <section :id="`${sectionId}`">
    <div id="advocate-card">
      <div class="advocate-content">
        <PageTitle tag="ADVOCATE" title="候選人主張"></PageTitle>
        <div class="advocate-subtitle">
          <h3 v-if="deviceType === 'Desktop'" v-html="advocate"></h3>
          <h4 v-else v-html="advocate"></h4>
        </div>
        <div class="advocate-desc">
          <p>
            畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
            GDP 經濟帶來巨大效益。
          </p>
          <p>
            因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
          </p>
        </div>
      </div>
      <div class="advocate-image"></div>
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
  #advocate-card {
    @include section-content-layout();
    border-radius: 24px;

    width: 100%;
    overflow: hidden;

    background: white;
    display: flex;
    flex-direction: row;
    gap: $pd-sm;

    @include pad {
      flex-direction: column;
    }

    .advocate-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: $pd-lg;

      padding: $spacing-md 40px;
    }
    .advocate-image {
      flex: 1 0 auto;
      background-image: url(../assets/images/advocate.png);
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;

      @include pad {
        height: 500px;
      }
      @include mobile {
        height: 300px;
      }
    }
  }
}

.advocate-content {
  .advocate-subtitle {
    :deep(.point) {
      color: $color-theme;
    }
  }
}
</style>
