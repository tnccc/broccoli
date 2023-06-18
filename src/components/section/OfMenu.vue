<script setup lang="ts">
import SectionOfContainer from '@/components/section/OfContainer.vue'
import SectionOfHeader from '@/components/section/OfHeader.vue'
import { menus } from '@/assets/data/menu'
import { imageUrl } from '@/module/imageUtils'
</script>

<template>
  <section :class="$style.menu">
    <SectionOfContainer>
      <SectionOfHeader 
        :first="'MENU'"
        :second="'&DRINK'"
        :ja="'メニュー&ドリンク'"
      />
      <div :class="$style.container">
        <div :class="$style.contents">
          <div :class="$style.list">
            <div
              v-for="item in menus"
              :key="item.name"
              :class="$style.item"
            >
              <figure :class="$style.image">
                <img
                  :src="imageUrl(item.image)"
                  :alt="item.alt"
                  loading="lazy"
                  content-visibility="auto"
                >
              </figure>
              <div :class="$style.description">
                <h4>{{ item.name }}</h4>
                <p>{{ item.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionOfContainer>
  </section>
</template>

<style lang="scss" module>
@use '@/assets/scss/mixin.scss' as *;

.menu {
  --menu-column: 4;

  @include mediaScreen('tablet') {
    --menu-column: 2;
  }

  @include mediaScreen('mobile') {
    --menu-column: 1;
  }

  .container {
    margin-block-start: calc(var(--bv) * 12);

    @include mediaScreen('tablet') {
      margin-block-start: calc(var(--bv) * 5);
    }

    .contents {

      .list {
        display  : flex;
        flex-wrap: wrap;
        gap      : calc(var(--bv) * 3);

        @include mediaScreen('mobile') {
          gap: var(--bv);
        }
  
        .item {
          flex: 1 0 calc((100% / var(--menu-column)) - calc(var(--bv) * 6));
          width: calc((100% / var(--menu-column)) - calc(var(--bv) * 6));
        }

        .description {
          line-height: var(--line-height-low);

          > h4 {
            margin-block-start: var(--bv);
            color     : var(--blue);
          }

          > p {
            margin-block-start: var(--bv);
            font-size         : var(--fs-small);
            line-height       : calc(var(--line-height-normal) + .2);

            @include mediaScreen('tablet') {
              font-size: var(--fs-min);
            }
          }
        }
  
        .image {
          > img {
            transform: rotate(-1deg);
          }
        }
      }
    }
  }
}
</style>