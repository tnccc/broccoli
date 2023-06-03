<script setup lang="ts">
import SectionOfHeader from '@/components/section/OfHeader.vue'
import SectionContainer from '@/components/section/OfContainer.vue'
</script>

<template>
  <section :class="$style.concept">
    <SectionContainer>
      <SectionOfHeader 
        :direction="'right'"
        :first="'CON'"
        :second="'CEPT'"
        :ja="'コンセプト'"
      />
      <div :class="$style.container">
        <div :class="$style.contents">
          <div>
            <figure :class="$style.image">
              <img src="@/assets/img/concept_01.png" alt="OPEN">
            </figure>
            <figure :class="$style.image">
              <img src="@/assets/img/concept_02.png">
            </figure>
            <div :class="$style.text">
              <p>
                「Broccoli」へようこそ！オシャレなランチやカフェ体験を求めるあなたにぴったりの場所です。私たちは、美意識の高い女性に向けて、心地よい空間と美味しい料理を提供しています。
                私たちの店内は、洗練された雰囲気と温かみのあるインテリアで彩られています。木のぬくもりが感じられるテーブルやカウンター席で、ゆったりとした時間をお過ごしください。また、窓から差し込む自然光が店内を明るく照らし、絵画のような風景が目の前に広がります。
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  </section>
</template>

<style lang="scss" module>
@use '@/assets/scss/function.scss' as *;

.concept {
  --margin-image: calc(var(--bv) * 8);
  --margin-text : calc(var(--bv) * 16);
  
  .container {
    margin-top: calc(var(--bv) * 12);

    .contents {
      margin-top: calc(var(--bv) * 8);

      > div {
        display        : flex;
        justify-content: center;
        gap: 0 calc(var(--bv) * 4);

        > * {
          flex     : 1 1 calc(var(--bv) * 40);
          max-width: calc(var(--bv) * 40);
        }
        
        .text {
          margin-block-start: var(--margin-text);
          font-size: calcClamp(12, 16, 1480, 768);
          text-align        : justify;
          line-height       : 2;
        }

        .image {
          &:last-of-type {
            margin-block-start: var(--margin-image);
          }
        }
      }
    }
  }
}
</style>