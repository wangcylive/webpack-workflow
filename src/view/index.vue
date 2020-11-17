<template>
  <div>
    <div class="page">
      <h1 class="page-title">Vue3 + Vue-Router + Vuex</h1>
      <nav class="page-nav">
        <router-link v-for="item of routes" :key="item.path" :to="item.path" active-class="active" exact>{{
          item.name
        }}</router-link>
      </nav>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
export default {
  name: 'VueView',
  setup() {
    const router = useRouter()
    const { params, query } = useRoute()
    console.log(params, query)

    return {
      routes: router.getRoutes()
    }
  },
}
</script>

<style lang="scss">
@import 'layout';
</style>
