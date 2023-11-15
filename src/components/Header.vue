<script setup lang="ts">

</script>
<template>
  <div id="header">
    <!-- logo -->
    <div id="header_logo">
      <img src="../assets/icons/logo.svg" />
      <div id="logo_title">喵立翰 Miao Li-Han</div>
    </div>
    <!-- menu -->
    <div id="header_menu">
      <div class="menu_button">候選人主張</div>
      <div class="menu_button">最新活動</div>
      <div class="menu_button">政策議題</div>
      <div class="menu_button">小額捐款</div>
      <div class="menu_button">民眾服務信箱</div>
    </div>
    <!-- social media -->
    <div id="header_social">
      <div class="social_button"><img src="../assets/icons/social_fb.svg"/></div>
      <div class="social_button"><img src="../assets/icons/social_ig.svg"/></div>
      <div class="social_button"><img src="../assets/icons/social_youtube.svg"/></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#header {
  display: flex;
  flex-direction: row;
  border: 1px solid hotpink;

  padding: 16px 24px;
}
#header_logo {
  flex: 0 0 auto;
  border: 1px solid blue;

  display: flex;
  flex-direction: row;
  align-items:center;
}
#logo_title {
  margin-left: 8px;
}

#header_menu {
  flex: 1;
  border: 1px solid green;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.menu_button {
  padding: 8px;
  cursor: pointer;
}
#header_social {
  flex: 0 0 auto;
  border: 1px solid orange;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
}
.social_button {
  padding: 2px;
  cursor: pointer;
  
  display: flex;
  align-items: center;;
}
</style>
