<template>
  <div>
    <h1>Lender's default</h1>
    <div v-for="item in lenders" :key="item.id">{{ item }}</div>
    <div v-for="item in status" :key="item.id">{{ item }}</div>
    <router-link :to="{ name: 'lender', params: { offered: 'Tidewater' } }"
      >Tidewater</router-link
    >
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['lenders']),
    ...mapActions(['fetchLenders'])
  }
}
</script>

<style lang="scss" scoped></style>
