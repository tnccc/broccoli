<script setup lang="ts">
import SectionOfContainer from '@/components/section/OfContainer.vue'
</script>

<template>
  <section :class="$style.location">
    <SectionOfContainer>
      <div :class="$style.background">
        <div :class="$style.filter" />
        <h2>LOCATION</h2>
        <a href="/" :class="$style.link">
          <span>Google Map</span>
        </a>
      </div>
    </SectionOfContainer>
  </section>
</template>

<style lang="scss" module>
@use '@/assets/scss/function.scss' as *;

.location {
  --background-height: calc(var(--bv) * 75);
  --filter-shadow: rgba(0, 0, 0, .5);
  
  .background {
    width           : 100%;
    min-height      : var(--background-height);
    position        : relative;
    display         : flex;
    flex-direction  : column;
    justify-content : center;
    align-items     : center;
    background-image: url(@/assets/img/original.jpg);
    background-size : cover;

    > h2 {
      position   : relative;
      z-index    : var(--z-index-min);
      font-size  : calc(var(--bv) * 10);
      font-family: var(--font-family-heading);
      color      : var(--white);
      gap: calc(var(--bv) * 3) 0;

      &::before {
        content         : "";
        display         : block;
        margin-inline   : auto;
        width           : calc(var(--bv) * 9);
        height          : calc(var(--bv) * 9);
        background-image: url(@/assets/img/svg/pin.svg);
        background-size : cover;
      }
    }

    .filter {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--filter-shadow);
    }

    .link {
      position          : relative;
      display           : flex;
      justify-content   : center;
      align-items       : center;
      width             : calc(var(--bv) * 25);
      margin-block-start: calc(var(--bv) * 3);
      padding           : var(--bv) 0;
      font-family       : var(--font-family-heading);
      font-weight       : bold;
      color             : var(--white);
      border            : 1px solid var(--white);
      border-radius     : calc(var(--bv) * 2);
      z-index           : var(--z-index-min);
      transition        : 
        color var(--transition-time),
        background-color var(--transition-time)
      ;
      
      > span {
        font-size: rem(14);
      }

      &:hover {
        color           : var(--blue);
        background-color: var(--white);
      }
    }
  }
}
</style>