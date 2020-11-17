<template>
  <div @click="onChangeName">Intro {{ name }}</div>
  <component-demo :name="name" id="demo1" @click="onShowLog">hahah</component-demo>
</template>

<script>
import { ref } from 'vue'
import ComponentDemo from './component'
export default {
  name: 'Intro',
  components: {
    ComponentDemo,
  },
  setup(props, context) {
    const name = ref('vue')
    const onChangeName = () => {
      name.value = 'vue ' + Date.now()
    }

    return {
      name,
      onChangeName,
      onShowLog(log) {
        console.log(log)
      }
    }
  },
}
</script>

<style lang="scss"></style>
