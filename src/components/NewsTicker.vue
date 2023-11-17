<script setup lang="ts">
import { ref } from 'vue';
const news = ref([
  '為喵星人，護台灣！',
  '從喵的眼中，看見台灣',
  '喵的未來，人的希望',
]);
</script>

<template>
  <div id="news-ticker">
    <div v-for="theNews in news" class="news">{{ theNews }}</div>
  </div>
</template>

<style lang="scss" scoped>
#news-ticker {
  padding: 10px;
  background-color: $color-theme;
  color: white;

  display: flex;
  flex-direction: row;
  gap: $pd-md;

  overflow: hidden;
  .news {
    flex: 0 0 auto;
    font-family: Mantou;
    font-size: $font-exlg;
    line-height: 1em;

    display: flex;
    flex-direction: row;
  }
}
</style>
