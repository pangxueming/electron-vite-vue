<template>
  <div class="setting-page">
    <div class="left-container">
      
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import { ElMessage } from 'element-plus';
import { useI18n } from 'vue-i18n';
import { langStore } from '@/store';

const value = ref('')

const options = [
  {
    value: 'cn',
    label: '中文',
  },
  {
    value: 'en',
    label: 'english',
  },
  {
    value: 'tw',
    label: '繁体',
  }
]

const { tm, locale } = useI18n();
const store = langStore();

const lang = ref('');


function handleChange() {
  store.setLanguage(value.value);

  locale.value = value.value;
}

function changeLanguage() {
  store.setLanguage(value.value);

  locale.value = value.value;
}

</script>

<style scoped lang="scss">
.setting-page {
  margin: 10px;
}
</style>
