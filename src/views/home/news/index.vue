<template>
  <div>
    <item v-for="n of news" :key="n.id" :news="n"></item>
  </div>
</template>

<script setup lang="ts">
import Item from './Item.vue'
import {useStore} from 'vuex'
import {key} from "@/store";
import {computed} from "vue";

const store = useStore(key)
store.dispatch('home/getNews')

const news = computed(() => {
  return store.state.home?.news
})
</script>

<style scoped></style>
