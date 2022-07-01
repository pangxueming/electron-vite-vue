<template>
  <div class="setting-item">
    <div class="title">{{ title }}</div>
    <el-input v-model="value"
              class="container w-4rem h-40"
              @input="$emit(title, $event.target.value)" />
  </div>
</template>

<script setup lang="ts">
defineProps(['title', 'value']);
</script>

<style lang="scss" scoped>
.setting-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: .3rem;

  .title {
    flex: 2;
    text-align: center;
  }

  .container {
    flex: 3;
  }
}
</style>
