<template>
  <div>
    <div>Props Name: {{ name }}, NameTime: {{ nameTime }}</div>
    <div @click.stop="onClick"><slot/></div>
  </div>
</template>

<script>
import { toRefs, computed } from 'vue'
export default {
  name: 'DemoComponent',
  props: {
    name: String
  },
  setup(props, context) {
    console.log(props, context)
    const { name } = toRefs(props)
    console.log('toRefs', name.value)
    const nameTime = computed(() => `${name.value}-${new Date().toUTCString()}`)

    return {
      nameTime,
      onClick() {
        context.emit('click', nameTime.value)
      }
    }
  },
}
</script>

<style lang="scss"></style>
