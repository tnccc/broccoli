<script setup lang="ts">
import SectionOfContainer from '@/components/section/OfContainer.vue'

</script>
<template>
  <section :class="$style.main">
    <SectionOfContainer :class="$style.container">
      <div :class="$style.title">
        <div>
          <span>ちいさな</span>
          <span>しあわせ</span>
          <span>ここにある</span>
        </div>
      </div>
      <figure :class="[$style.image, 'image']">
        <img src="@/assets/img/mask_02.jpg" alt="">
      </figure>
    </SectionOfContainer>
  </section>
</template>

<style lang="scss" module>
@use '@/assets/scss/function' as *;

.main {
  display           : flex;
  align-items       : center;
  justify-content   : center;
  width             : 100%;
  height            : 100%;

  .container {
    display: flex;

    .title {
      flex           : 1 1 calc((40% - var(--navigation-width) + calc(var(--bv) * 10)));
      width          : calc((40% - var(--navigation-width) + calc(var(--bv) * 10)));
      display        : flex;
      justify-content: center;
      align-items    : center;

      > div {
        > span {
          display       : block;
          font-size     : calcClamp(40, 60, 740, 1440);
          font-weight   : bold;
          letter-spacing: .35em;
        }
      }

    }

    .image {
      flex : 1 0 calc(60% - var(--navigation-width));
      width: calc(60% - var(--navigation-width));
      mask-image: url("@/assets/img/mask_01.svg");
      mask-repeat: no-repeat;
      mask-position: 50% 0;
      mask-size: auto 100%;
  
      > img {
        display: block;
      }
    }
  }
  
}
</style>