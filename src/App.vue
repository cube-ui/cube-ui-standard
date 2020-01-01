<template>
  <div id="app">
    <cube-row>
      <cube-col>A</cube-col>
      <cube-spacer></cube-spacer>
      <cube-col>B</cube-col>
      <cube-spacer></cube-spacer>
      <cube-col>C</cube-col>
    </cube-row>
    <cube-button>Add more</cube-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class App extends Vue {}
</script>

<style lang="stylus">
</style>
