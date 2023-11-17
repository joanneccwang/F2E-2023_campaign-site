<script setup lang="ts"></script>

<template>
  <div class="layout-title">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.layout-title {
  font-family: Mantou;
  font-size: $font-exlg;
  background: $color-gradient;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  align-self: center;
}
</style>
