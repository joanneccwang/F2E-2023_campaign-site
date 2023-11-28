<script setup lang="ts">
import FullName from '@/components/Campaign/FullName.vue';
</script>

<template>
  <section>
    <div id="footer">
      <div class="footer-block">
        <FullName size="md"></FullName>
        <div class="social-btns">
          <div class="social-btn">
            <img src="../assets/icons/social_fb.svg" />
          </div>
          <div class="social-btn">
            <img src="../assets/icons/social_ig.svg" />
          </div>
          <div class="social-btn">
            <img src="../assets/icons/social_youtube.svg" />
          </div>
        </div>
        <div>© 2023 喵立翰 Miao Li-Han 版權所有</div>
      </div>
      <div class="footer-block">
        <h4>競選總部</h4>
        <div class="contact">
          <p>辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓</p>
          <p>電話：(02) 888-5678</p>
          <p>電子郵件地址：meowoffice@linmeow.tw</p>
        </div>
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

  #footer {
    @include section-content-layout();
    margin: 0px 40px;
    width: 100%;
    max-width: 1312px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: $pd-sm;
    overflow: hidden;

    .footer-block {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      gap: $pd-sm;

      .contact {
        display: flex;
        flex-direction: column;
        word-break: break-all;
      }
    }
  }
}

.social-btns {
  display: flex;
  flex-direction: row;
  gap: $pd-base;
  .social-btn {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 100%;
  }
}
</style>
