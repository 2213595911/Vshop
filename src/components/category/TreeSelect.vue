<template>
  <div class="select">
    <div class="nav">
      <ul>
        <li :class="{ active: temp === item.id }" @click="changeNav(item.id, index)" v-for="(item, index) of category" :key="item.id">
          {{ item?.text }}
        </li>
      </ul>
    </div>
    <div class="content" ref="target">
      <div class="container">
        <Item v-for="item in category" :key="item.id" :item="item" @scroll="scroll" ref="child" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType, ref, onMounted, Ref } from 'vue'
import type { CateType } from '@/types/useCate'
import BScroll from '@better-scroll/core'
import Item from './Item.vue'

const temp: Ref<number> = ref(1)
defineProps({
  category: {
    type: Array as PropType<CateType[]>,
  },
})

const target = ref()

let bs: any = ref()
onMounted(() => {
  bs = new BScroll(target.value, {
    probeType: 3,
    click: true,
    bounce: true,
  })
})

const position = ref([0, 120, 615, 1060, 1440, 1760, 2120, 2431, 2710, 3000, 3310, 3600, 3880, 4150])
const scroll = (id: number): void => {
  temp.value = id
}

const child = ref()
const changeNav = (id: number, index: number): void => {
  temp.value = id
  bs.scrollTo(0, -position.value[index])
}
</script>
<style lang="scss" scoped>
.select {
  width: 100%;
  height: 85vh;
  overflow: hidden;
  position: relative;
  .nav {
    width: 200px;
    height: 100%;
    background: rgb(235, 233, 233);
    overflow: auto;
    position: absolute;
    left: 0;
    top: 0;
    ul {
      li {
        text-align: center;
        font-size: 30px;
        padding: 25px 0;
        color: $color_a;
        &.active {
          background: $color_white;
          color: $color_red;
        }
      }
    }
  }
  .content {
    margin-left: 200px;
    background: $color_white;
    overflow: hidden;
    position: relative;
    height: 85vh;
    .container {
      div {
        h2 {
          margin-left: 15px;
        }
      }
    }
  }
}
</style>
