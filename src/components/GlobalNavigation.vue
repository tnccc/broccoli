<script setup lang="ts">
import { navigation } from '@/assets/data/navigation';
type Emits = {
  (e: string, sectionId: string): void
}

type Props = {
  navigationElements: any,
  isLoadingDisplay: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const smoothScroll = (sectionId: any) => {
  emit('scrollToSection', sectionId)
}

</script>
<template>
  <nav id="navigation" :class="[
      $style.navigation,
      {[$style.show]: !isLoadingDisplay}
    ]">
    <ul :class="$style.list">
      <li
        v-for="item in navigation"
        :key="item.name"
        :class="[$style.item, 'item']"
        :data="item.data"
      >
        <a
          :href="item.path"
          @click.prevent="smoothScroll(item.path.replace('#', ''))"
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
  opacity : 0;
  filter: blur(2px);
  transition: all, 2s ease-in;

  &.show {
    filter : blur(0);
    opacity: 1;
  }

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
      font-size     : var(--fs-min);
      font-weight   : bold;
      color         : var(--blue);
      text-transform: uppercase;
      letter-spacing: -0.05em;
    }
  }
}
</style>