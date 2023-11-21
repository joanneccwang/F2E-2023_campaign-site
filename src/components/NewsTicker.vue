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
    <div class="marquee">
      <div v-for="theNews in news" class="news">{{ theNews }}</div>
      <div v-for="theNews in news" class="news">{{ theNews }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$news-width: 720px;
#news-ticker {
  padding: 10px;
  background-color: $color-theme;
  color: white;

  display: flex;
  flex-direction: row;
  gap: $pd-md;

  overflow: hidden;
  .marquee {
    display: flex;
    flex-direction: row;

    width: fit-content;

    flex: 0 0 auto;

    transform: translateX(0);
    animation: marquee 15s linear infinite;
  }
  .news {
    flex: 0 0 $news-width;
    font-family: Mantou;
    font-size: $font-exlg;
    line-height: 1em;

    display: flex;
    flex-direction: row;
  }
}

@keyframes marquee {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(calc(-3 * $news-width + -2 * $pd-md), 0, 0);
  }
}
</style>
