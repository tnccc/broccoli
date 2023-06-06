<script setup lang="ts">
const navigations = [
  {
    path: '/',
    name: 'top'
  },
  {
    path: '#concept',
    name: 'concept'
  },
  {
    path: '#menu',
    name: 'menu&drink'
  },
  {
    path: '#gallery',
    name: 'gallery'
  },
  {
    path: '#location',
    name: 'location'
  }
]
</script>
<template>
  <nav :class="$style.navigation">
    <ul :class="$style.list">
      <li 
        v-for="item in navigations"
        :key="item.name"
        :class="$style.item"
      >
        <a :class="$style.current" :href="item.path">
          <span>{{ item.name }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" module>
@use '@/assets/scss/function.scss' as *;

.navigation {
  position: fixed;
  left: calcClamp(16, 24, 768, 1440);

  .item {
    line-height: var(--line-height-low);

    &:not(:first-child) {
      margin-block-start: calc(var(--bv) * 2);
    }

    > a {
      position      : relative;
      font-size     : rem(12);
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