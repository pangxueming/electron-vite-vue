<template>
  <div class="setting-item">
    <div class="title">{{ title }}</div>
    <el-select v-model="newVal"
               class="container w-4rem h-40"
               size="large">
      <el-option v-for="item in selectOpts"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value" />
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { LocaleMessageValue } from 'vue-i18n';

interface Props {
  title: LocaleMessageValue | {} | string,
  value: string,
  selectOpts: any
}

interface Emits {
  (e: 'update:value', value: string): void
}

const props = withDefaults(defineProps<Props>(), {
  title: '标题',
  value: '',
  selectOpts: []
})

const emit = defineEmits<Emits>();

const newVal = computed({
  get() {
    return props.value;
  },
  set(newValue) {
    emit('update:value', newValue);
  }
});
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