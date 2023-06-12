<script setup lang="ts"></script>

<template>
  <footer :class="$style.footer">
    <div :class="$style.container">
      <small>&copy; Broccoli</small>
    </div>
  </footer>
</template>

<style lang="scss" module>
@use '@/assets/scss/mixin.scss' as *;

.footer {
  display           : flex;
  align-items       : center;
  justify-content   : center;
  height            : var(--footer-height);
  margin-block-start: calc(var(--bv) * 16);
  padding-inline    : calc(var(--bv) * 16) calc(var(--bv) * 4);;
  color             : var(--white);
  background-color  : var(--green);

  @include mediaScreen('tablet') {
    margin-block-start: calc(var(--bv) * 5);
    padding-inline    : 0;
  }
}
</style>