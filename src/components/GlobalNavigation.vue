<script setup lang="ts">
import { navigation } from '@/assets/data/navigation';
const filteredNavigation = navigation.filter(item => item.name !== 'お問い合わせ' && item.path !== '#contact')
</script>
<template>
  <nav :class="$style.navigation">
    <ul :class="$style.list">
      <li
        v-for="item in filteredNavigation"
        :key="item.name"
        :class="$style.item"
      >
        <a
          :class="[{isCurrent: $style.current}]"
          :href="item.path"
        >
          <span>{{ item.name }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" module>
@use '@/assets/scss/function.scss' as *;
@use '@/assets/scss/mixin.scss' as *;

.navigation {
  position: fixed;
  left: calcClamp(16, 24, 768, 1440);

  @include mediaScreen('tablet') {
    display: none;
  }

  .item {
    line-height: var(--line-height-low);

    &:not(:first-child) {
      margin-block-start: calc(var(--bv) * 2);
    }

    > a {
      position      : relative;
      font-size     : var(--font-size-min);
      font-weight   : bold;
      color         : var(--blue);
      text-transform: uppercase;
      letter-spacing: -0.05em;

      &.current {
        display: inline-flex;
        align-items: center;

        &::before {
          content         : "";
          display         : block;
          width           : rem(6);
          height          : rem(6);
          margin-inline-end: var(--bv);
          background-color: var(--blue);
          border-radius   : 50%;
        }
      }
    }
  }
}
</style>