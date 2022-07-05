<template>
  <div class="setting-item">
    <div class="title">{{ title }}</div>
    <el-input class="container w-4rem h-40"
              v-model="newVal" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { LocaleMessageValue } from 'vue-i18n';

interface Props {
  title: LocaleMessageValue | {} | string,
  value: string
}

interface Emits {
  (e: 'update:value', value: string): void;
}

const prop = withDefaults(defineProps<Props>(), {
  title: '标题',
  value: ''
})
const emit = defineEmits<Emits>();

const newVal = computed({
  get() {
    return prop.value;
  },
  set(newValue: string) {
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
