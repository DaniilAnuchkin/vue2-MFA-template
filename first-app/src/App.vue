<template>
  <div>
    <Navbar />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Navbar from 'navbar/Navbar'

@Options({
  name: 'host',
  components: {
    Navbar
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
