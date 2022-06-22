<template>
  <div>
    <h3>dispatcher</h3>
    <button @click="navBack">navBack</button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function navBack() {
  router.push('/')
}

</script>

<style lang="scss" scoped>
</style>