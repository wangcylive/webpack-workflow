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
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
      name: '',
    }
  },
  computed: {
    ...mapGetters(['nickName']),
  },
  methods: {
    ...mapActions(['updateUser']),
    updateNickName() {
      this.updateUser({
        nickName: this.name,
      })
    },
  },
}
</script>

<style lang="scss" module>
@import 'index.module';
</style>
