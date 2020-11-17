<template>
  <div>
    <div>Home</div>
    <div :class="$style.module">Store nickName: {{ nickName }}</div>
    <div>
      <input v-model.trim="name" type="text" />
      <button @click="updateNickName">update</button>
    </div>
  </div>
</template>

<script>
import { ref, toRef, watchEffect, computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Home',
  setup(props, context) {
    const name = ref('')
    const store = useStore()

    return {
      name,
      updateNickName: () => store.dispatch('updateUser', { nickName: name.value }),
      nickName: computed(() => store.state.user.nickName),
    }
  },
}
</script>

<style lang="scss" module>
@import 'index.module';
</style>
