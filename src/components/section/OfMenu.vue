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
                <img :src="imageUrl(item.image)" :alt="item.alt">
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
.menu {
  .container {
    margin-top: calc(var(--bv) * 12);

    .contents {
      .list {
        display: flex;
        gap: 0 calc(var(--bv) * 3);
  
        .item {
          flex: 1 0 calc((100% / 4) - calc(var(--bv) * 6));
          width: calc((100% / 4) - calc(var(--bv) * 6));
        }

        .description {
          line-height: var(--line-height-low);

          > h4 {
            margin-block-start: calc(var(--bv) * 1);
            color     : var(--blue);
          }

          > p {
            margin-block-start: calc(var(--bv) * 1);
            font-size         : var(--font-size-small);
            line-height       : calc(var(--line-height-normal) + .2);
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