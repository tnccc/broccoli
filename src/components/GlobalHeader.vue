<script setup lang="ts">
import { ref } from 'vue'
import { navigation } from '@/assets/data/navigation'
import { imageUrl } from '@/module/imageUtils'

const isDisplayedNavigation = ref(false)
</script>

<template>
  <header id="header" :class="$style.header">
    <div :class="$style.container">
      <div :class="$style.left_column">
        <h1>Broccoli</h1>
        <a href="/">
          <img src="@/assets/img/instagram.png" alt="instagram">
        </a>
      </div>
      <div :class="$style.right_column">
        <a href="#contact"><span>contact</span></a>
      </div>
      <button
        :class="[
          $style.hamburger,
          {[$style.open]: isDisplayedNavigation}
        ]"
        @click="isDisplayedNavigation = !isDisplayedNavigation"
      >
        <span v-for="i in 3" />
      </button>
      <nav 
        :class="[
          $style.navigation,
          {[$style.open]: isDisplayedNavigation}
        ]"
      >
        <div :class="$style.navigation_container">
          <ul :class="$style.list">
            <li
              v-for="item in navigation"
              :class="$style.item"
              :key="item.name
              "
            >
              <a :href="item.path">
                {{ item.name }}
                <img 
                  v-if="item.path === 'instagram.png'"
                  :src="imageUrl(item.path)" :alt="item.alt"
                >
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" module>
@use '../assets/scss/function' as *;
@use '../assets/scss/mixin' as *;

.header {
  padding       : calc(var(--bv) * 2) calc(var(--bv) * 2.5);
  position      : relative;
  color         : var(--green);
  letter-spacing: var(--letter-spacing-normal);

  &::after {
    content            : "";
    display            : block;
    width              : 100%;
    height             : 1px;
    position           : absolute;
    top                : 100%;
    left               : 0;
    background-image   : linear-gradient(to right, #708848, #708848 6px, transparent 6px, transparent 8px);
    background-repeat  : repeat-x;
    background-position: left bottom;
    background-size    : 12px 2px;
  }

  .hamburger {
    position: relative;
    display : none;
    z-index : var(--z-index-nav);

    @include mediaScreen('tablet') {
      width          : calc(var(--bv) * 2.5);
      height         : calc(var(--bv) * 2.5);
      gap            : calc(var(--bv) / 2);
      display        : flex;
      align-items    : center;
      justify-content: center;
      flex-direction : column;
      position       : relative;

      > span {
        display         : block;
        width           : 100%;
        height          : 2px;
        cursor          : pointer;
        background-color: var(--green);
        transition      : all .3s;
      }
    }

    &.open {
      > span {
        position: absolute;

        &:first-of-type {
          transform: rotate(-45deg);
        }

        &:nth-of-type(2) {
          opacity: 0;
        }

        &:last-of-type {
          transform: rotate(45deg);
        }
      }
    }
  }

  .container {
    display    : flex;
    align-items: center;
    .left_column {
      flex       : 1 0 auto;
      display    : flex;
      align-items: center;
      gap        : 0 calc(var(--bv) * 6);

      > h1 {
        font-size : rem(20); //仮で設定しています
        transition: opacity var(--transition-time);
      }

      > a {
        width     : calc(var(--bv) * 3);
        height    : calc(var(--bv) * 3);
        transition: opacity var(--transition-time);

        &:hover {
          opacity: var(--opacity);
        }

        @include mediaScreen('tablet') {
          > img {
            display: none;
          }
        }
      }
    }

    .right_column {
      > a {
        display    : inline-block;
        font-weight: bold;

        > span {
          text-transform: uppercase;
        }

        &:hover {
          > span {
            &::after {
              width: 100%;
            }
          }
        }

        span {
          position: relative;
          z-index : 1;

          &::after {
            content         : "";
            position        : absolute;
            left            : 0;
            bottom          : calc(var(--bv) / -2);
            width           : 0%;
            height          : 2px;
            background-color: var(--green);
            transition      : width .3s;
          }
        }

        + a {
          margin-inline-start: calc(var(--bv) * 3);
        }
      }

      @include mediaScreen('tablet') {
        opacity: 0;
        visibility: hidden;

        &.open {
          opacity: 1;
          visibility: visible;
        }
      }
    }

    .navigation {
      width     : 100%;
      height    : 100dvh;
      position  : fixed;
      top       : 0;
      left      : 0;
      opacity   : 0;
      visibility: hidden;
      transition: all var(--transition-time);
      z-index   : var(--z-index-contents);

      &_container {
        height          : 100%;
        display         : flex;
        flex-direction  : column;
        align-items     : center;
        justify-content : center;
        background-color: var(--white);

        .list {
          li {
            > a {
              font-size     : calcClamp(16, 32, 420, 768);
              font-weight   : bold;
              text-transform: uppercase;
            }

            + li {
              margin-block-start: calc(var(--bv) * 2);
            }
          }
        }
      }

      &.open {
        opacity   : 1;
        visibility: visible;
      }
    }
  }
}
</style>