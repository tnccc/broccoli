<script setup lang="ts">
import SectionOfHeader from '@/components/section/OfHeader.vue'
import SectionOfContainer from '@/components/section/OfContainer.vue'
import Slider from '@/components/Slider.vue'

</script>

<template>
  <section :class="$style.gallery">
    <SectionOfHeader
      :direction="'right'"
      :first="'GAL'"
      :second="'LERY'"
      :ja="'ギャラリー'"
    />
    <SectionOfContainer>
      <div :class="$style.contents">
        <Slider />
      </div>
    </SectionOfContainer>
  </section>
</template>

<style lang="scss" module>
.gallery {
  width: 100%;
}
</style>