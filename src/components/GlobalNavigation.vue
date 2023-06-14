<script setup lang="ts">
import { navigation } from '@/assets/data/navigation';
import { handleError } from 'vue';

type Props = {
  navigationElements: any
}

const props = defineProps<Props>()

const filteredNavigation = navigation.filter(item => item.name !== 'お問い合わせ' && item.path !== '#contact')

const scrollToSection = (sectionId: string) => {
  const targetElement = document.getElementById(sectionId)
  const top = document.getElementById('top')
  if(targetElement) {
    window.scrollTo({
      top     : targetElement === top ? 0 : targetElement.offsetTop,
      behavior: 'smooth',
    })
  } 
}
</script>
<template>
  <nav :class="$style.navigation">
    <ul :class="$style.list">
      <li
        v-for="item in filteredNavigation"
        :key="item.name"
        :class="[$style.item, 'item']"
        :data="item.data"
      >
        <a
          :href="item.path"
          @click.prevent="scrollToSection(item.path.replace('#', ''))"
        >
          <span>{{ item.name }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
@use '@/assets/scss/function.scss' as *;

.item {
  > a {
    transition: all var(--transition-time);
  }

  &.current {
    > a {
      display    : inline-flex;
      align-items: center;
      font-weight: bold;
      transform: scale(1.2);

      &::before {
        content         : "";
        display         : block;
        position        : relative;
        left            : calc(var(--bv) * -1);
        width           : rem(6);
        height          : rem(6);
        background-color: var(--blue);
        border-radius   : 50%;
      }
    }
  }
}
</style>

<style lang="scss" module>
@use '@/assets/scss/function.scss' as *;
@use '@/assets/scss/mixin.scss' as *;

.navigation {
  position: fixed;
  left    : calcClamp(8, 14, 768, 1440);
  bottom  : calc(var(--bv) * 11);

  @include mediaScreen('tablet') {
    display: none;
  }

  .item {
    margin-inline-start: calc(var(--bv) * 2);
    line-height        : var(--line-height-low);

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
    }
  }
}
</style>