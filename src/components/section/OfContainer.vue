<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<style lang="scss" module>
@use '@/assets/scss/mixin' as *;

.container {
  max-width     : var(--desktop-width);
  width         : 100%;
  margin-inline : auto;
  padding-inline: calc(var(--bv) * 16) calc(var(--bv) * 4);

  @include mediaScreen('tablet') {
    max-width     : none;
    padding-inline: calc(var(--bv) * 4);
  }
}
</style>