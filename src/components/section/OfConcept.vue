<script setup lang="ts">
import SectionOfHeader from '@/components/section/OfHeader.vue'
import SectionContainer from '@/components/section/OfContainer.vue'
import SectionOfConceptLeadTitle from '@/components/SectionConceptLeadTitle.vue'

</script>

<template>
  <section :class="$style.concept">
    <SectionContainer>
      <SectionOfHeader 
        :first="'CON'"
        :second="'CEPT'"
        :ja="'コンセプト'"
      />
      <div :class="$style.container">
        <SectionOfConceptLeadTitle />
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
.concept {
  --transform-image: translateY(calc(var(--bv) * 8));
  --transform-text : translateY(calc(var(--bv) * 16));
  
  .container {
    margin-top: calc(var(--bv) * 8);

    .contents {
      margin-top: calc(var(--bv) * 8);

      > div {
        display        : flex;
        justify-content: center;
        gap: 0 calc(var(--bv) * 4);

        > * {
          flex : 0 0 calc(var(--bv) * 40);
          width: calc(var(--bv) * 40);
        }
        
        .text {
          text-align    : justify;
          transform     : var(--transform-text);
          line-height: 2;
        }

        .image {
          &:last-of-type {
            transform: var(--transform-image);
          }
        }
      }
    }
  }
}
</style>