<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue';
</script>

<template>
  <div :class="$style.pages">
    <GlobalHeader />
    <main></main>
  </div>

</template>

<style lang="scss" module>
.pages {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
}
</style>

