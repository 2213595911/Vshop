<template>
  <div ref="target">
    <h2>{{ item?.text }}</h2>
    <div class="context">
      <div v-for="sub of item?.child" :key="sub.id">
        <img :src="sub.icon" alt="" />
        <span>{{ sub.text }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, PropType, ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps({
  item: {
    type: Object,
  },
})
const emit = defineEmits(['scroll'])
const target = ref(null)

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      console.log(observerElement)

      emit('scroll', props.item?.id)
    }
  },
  { threshold: 0.5 }
)
</script>

<style scoped lang="scss">
.context {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  margin-left: 15px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin: 15px;
    text-align: center;
    img {
      width: 100px;
      height: 100px;
    }
    span {
      font-size: 26px;
    }
  }
}
</style>
