<template>
  <!-- TODO 替换掉 -->
  <ul>
    <li v-for="c in components" :key="c">
      <a :href="`#/${c}`">{{ c }}</a>
    </li>
  </ul>
</template>

<script lang="ts">
import { components } from '../../config'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  data() {
    return {
      components
    }
  }
}
</script>
