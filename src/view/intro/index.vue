<template>
    <div @click="onChangeName">Intro {{ name }}</div>
</template>

<script>
export default {
  name: 'Intro',
  data () {
    return {
      name: 'vue'
    }
  },
  methods: {
    onChangeName () {
      this.name = 'vue ' + Date.now()
    }
  }
}
</script>

<style lang="scss">

</style>