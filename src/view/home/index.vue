<template>
    <div>
        <div>Home</div>
        <div :class="$style.module">Vue</div>
    </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" module>
    @import "index";
</style>