<script setup lang="ts">
type Props = {
  first: string,
  second: string,
  ja: string,
}

const props = defineProps<Props>()
</script>

<template>
  <h2>
    <span :class="$style.en">
      <span>{{ first }}</span>{{ second }}
    </span>
    <span :class="$style.ja">{{ ja }}</span>
  </h2>
</template>

<style lang="scss" module>
@use '@/assets/scss/function' as *;

h2 {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  span {
    display: block;
    color: var(--blue);
  }

  .en {
    font-size: calcClamp(50, 88, 740, 1440);;
    font-family: var(--font-family-heading);

    > span {
      display: inline;
      color: transparent;
      -webkit-text-stroke: 1px var(--blue
      );
    }
  }

  .ja {
    font-size: calc(var(--bv) * 2.5);
  }
}

</style>