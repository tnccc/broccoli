<script setup lang="ts">
import SectionOfContainer from '@/components/section/OfContainer.vue'

</script>
<template>
  <section :class="$style.main">
    <SectionOfContainer :class="$style.container">
      <div :class="$style.lead">
        <div>
          <span :class="$style.title">
            <span :class="[$style.text, 'text01' ]">
              ちいさな
            </span>
          </span>
          <span :class="$style.title">
            <span :class="[$style.text, 'text02']">
              しあわせ
            </span>
          </span>
          <span :class="$style.title">
            <span :class="[$style.text, 'text03']">
              ここにある
            </span>
          </span>
        </div>
      </div>
      <figure :class="[$style.image, 'figure']">
        <img
          class="image"
          src="@/assets/img/mask_02.jpg" 
          loading="lazy"
          content-visibility="auto"
        >
      </figure>
    </SectionOfContainer>
  </section>
</template>

<style lang="scss" module>
@use '@/assets/scss/function' as *;
@use '@/assets/scss/mixin' as *;

.main {
  display           : flex;
  align-items       : center;
  justify-content   : center;
  width             : 100%;
  height            : 100%;

  .container {
    display: flex;

    @include mediaScreen('tablet') {
      flex-direction: column;
    }

    .lead {
      flex           : 1 1 calc((40% - var(--navigation-width) + calc(var(--bv) * 10)));
      width          : calc((40% - var(--navigation-width) + calc(var(--bv) * 10)));
      display        : flex;
      justify-content: center;
      align-items    : center;

      @include mediaScreen('tablet') {
        flex           : 0 0 auto;
        width          : 100%;
        justify-content: flex-start;
      }

      > div {
        position: relative;
        z-index : 1;

        .title {
          display       : block;
          font-size     : calcClamp(40, 60, 740, 1440);
          font-weight   : bold;
          letter-spacing: .35em;
          overflow      : hidden;

          > span {
            display   : block;
            opacity   : 0;
            transform : translateY(110%);
            transition: opacity .6s, transform .8s;
          }

          @include mediaScreen('tablet') {
            font-size: calcClamp(24, 40, 375, 768);
          }
        }
      }

    }

    .image {
      flex         : 1 0 calc(60% - var(--navigation-width));
      width        : calc(60% - var(--navigation-width));
      mask-image   : url("@/assets/img/mask_01.svg");
      mask-repeat  : no-repeat;
      mask-position: 50% 0;
      mask-size    : auto 100%;
      transition   : opacity 1s cubic-bezier(0.19, 1, 0.22, 1),
      transform 1s cubic-bezier(0.19, 1, 0.22, 1);

      @include mediaScreen('tablet') {
        flex    : 0 0 80%;
        position: relative;
        width   : 80%;
        top     : calcClamp(-50, -200, 375, 768) ;
        right   : calcClamp(-90, -100, 375, 768);
      }
  
      > img {
        display: block;
        transform: scale(1.2);
        transform-origin: center;
        opacity: 0;
        object-fit: cover;
        transition: transform 1.5s cubic-bezier(0.19, 1, 0.22, 1),
        opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
  }
  
}
</style>