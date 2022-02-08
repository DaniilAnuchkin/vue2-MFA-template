<template>
  <nav>
    <router-link to="/"
                 custom
                 v-slot="{ navigate }">
      <div @click="navigate">Главная</div>
    </router-link>
    <router-link to="/about"
                 custom
                 v-slot="{ navigate }">
      <div @click="navigate">Информация</div>
    </router-link>
  </nav>
</template>

<script lang="ts">
import { Vue, Options, Watch } from 'vue-property-decorator'

@Options({
})
export default class Navbar extends Vue {
  @Watch('$route') changeRoute () {
    console.log(this.$route)
  }
}
</script>

<style lang="sass">
nav
  padding: 30px
  background-color: #409EFF
  div
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983
</style>
