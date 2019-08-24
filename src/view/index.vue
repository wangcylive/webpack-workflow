<template>
    <div>
        <div class="page">
            <h1 class="page-title">Vue + Vue-Router + Vuex</h1>
            <nav class="page-nav">
                <router-link :to="item.path" active-class="active" exact v-for="item of routes" :key="item.path">{{ item.name }}</router-link>
            </nav>
        </div>
        <div>
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'VueView',
  computed: {
    routes () {
      return this.$router.options.routes
    }
  }
}
</script>

<style lang="scss">
    @import "layout";
</style>