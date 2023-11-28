<script setup lang="ts"></script>

<template>
  <div class="layout-tag">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.layout-tag {
  border-radius: 8px;
  background: $text-primary;
  color: white;
  padding: $pd-base $pd-s;
  font-size: $font-body;
  font-weight: 700;
  align-self: center;
}
</style>
