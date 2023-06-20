<script setup lang="ts">
type Props = {
  first: string,
  second: string,
  ja: string,
  direction?: string
}

const props = withDefaults(defineProps<Props>(), { direction: 'default' })
</script>

<template>
  <h2 :class="$style[direction]">
    <span :class="$style.en">
      <span>{{ first }}</span>{{ second }}
    </span>
    <span :class="$style.ja">{{ ja }}</span>
  </h2>
</template>

<style lang="scss" module>
@use '@/assets/scss/function' as *;
@use '@/assets/scss/mixin' as *;

h2 {
  --fs-ja: #{rem(20)};
  display       : flex;
  flex-direction: column;
  &.right {
    align-items: flex-end;
  }
  
  span {
    display: block;
    color: var(--blue);
  }

  .en {
    font-size: calcClamp(50, 88, 740, 1440);
    font-family: var(--font-family-heading);

    @include mediaScreen('tablet') {
      font-size: calcClamp(30, 50, 375, 767);
    }

    > span {
      display: inline;
      color: transparent;
      -webkit-text-stroke: 1px var(--blue
      );
    }
  }

  .ja {
    font-size: var(--fs-ja);

    @include mediaScreen('tablet') {
      font-size: var(--fs-small);
    }
  }
}

</style>