<script setup lang="ts">

</script>

<template>
  <header :class="$style.header">
    <div :class="$style.container">
      <div :class="$style.left_column">
        <h1>LOGO</h1>
        <a href="/">
          <img src="@/assets/img/instagram.png" alt="instagram">
        </a>
      </div>
      <div :class="$style.right_column">
        <a href="/"><span>お問い合わせ</span></a>
        <a href="/"><span>店舗情報</span></a>
      </div>
    </div>
  </header>
</template>

<style lang="scss" module>
@use '../assets/scss/function' as *;
@use '../assets/scss/mixin' as *;

.header {
  padding       : calc(var(--bv) * 1.5) calc(var(--bv) * 2.5);
  position      : relative;
  color         : var(--green);
  letter-spacing: var(letter-spacing-normal);

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
  
  .container {
    display    : flex;
    align-items: center;

    .left_column {
      flex       : 1 0 auto;
      display    : flex;
      align-items: center;
      gap        : 0 calc(var(--bv) * 6);

      > h1 {
        font-size : rem(20);
        transition: opacity var(--transition-time);
      }

      > a {
        width     : calc(var(--bv) * 3);
        height    : calc(var(--bv) * 3);
        transition: opacity var(--transition-time);

        &:hover {
          opacity: var(--opacity);
        }
      }
    }

    .right_column {
      > a {
        display    : inline-block;
        font-weight: bold;

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
    }
  }
}
</style>