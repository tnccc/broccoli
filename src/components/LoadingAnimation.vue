<script setup lang="ts">
import Logo from '@/components/Logo.vue';
</script>

<template>
  <div :class="$style.container">
    <Logo :class="$style.logo"/>
  </div>
</template>

<style lang="scss" module>
@use '@/assets/scss/mixin.scss' as *;

.container {
  width           : 100%;
  height          : 100dvh;
  background-color: var(--green);

  .logo {
    width   : calc(var(--bv) * 55);
    position: absolute;
    top     : 50%;
    left    : 50%;
    transform: translate(-50%, -50%);

    @include mediaScreen('tablet') {
      width: calc(var(--bv) * 30);
    }
  }
}
</style>