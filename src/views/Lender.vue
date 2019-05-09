<template>
  <div>
    <h1>Lender Offered</h1>
    <!-- <div v-for="item in lenders" :key="item.id">{{ item }}</div> -->
    <div v-for="item in lenders" :key="item.id">
      <div
        v-if="item.name === offered.toLowerCase()"
        class="bg-purple text-white sm:bg-green md:bg-blue md:text-yellow lg:bg-red xl:bg-orang"
      >
        <h2>Name: {{ item.name }}</h2>
        <h2>ID:{{ item.id }}</h2>
        <h2>Status:{{ item.status }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: {
    offered: {
      type: String,
      default: 'offered'
    }
  },
  computed: {
    ...mapState(['lenders']),
    ...mapActions(['fetchLenders'])
    // check the route param for who is the creditor
    // set v-if based on param
  }
}
</script>

<style lang="scss" scoped>
.list {
  text-align: left;
}
</style>
