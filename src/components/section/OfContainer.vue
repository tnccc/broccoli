<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<style lang="scss" module>
.container {
  max-width     : var(--desktop-width);
  width         : 100%;
  margin-inline : auto;
  padding-inline: calc(var(--bv) * 4);
}
</style>