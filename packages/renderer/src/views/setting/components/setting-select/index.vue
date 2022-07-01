<template>
  <div class="setting-item">
    <div class="title">{{ title }}</div>
    <el-select v-model="value"
               class="container w-4rem h-40"
               size="large"
               @change="changeOpts">
      <el-option v-for="item in selectOpts"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value" />
    </el-select>
  </div>
</template>

<script setup lang="ts">
defineProps(['title', 'value', 'selectOpts']);

function changeOpts() {
  $emit()
}
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