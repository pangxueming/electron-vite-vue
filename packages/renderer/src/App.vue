<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<script lang="ts" setup>
import { ElConfigProvider } from 'element-plus'
import { ref, onMounted } from 'vue';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import _ from 'lodash';

const locale = ref(zhCn);

onMounted(() => {
  const debounce = _.debounce(() => {
    if (document.body.clientWidth > 1000) {
      document.documentElement.style.fontSize = '50px';
    } else if (document.body.clientWidth > 750) {
      document.documentElement.style.fontSize = '35px';
    } else if (document.body.clientWidth <= 750) {
      document.documentElement.style.fontSize = '20px';
    }
  }, 100)

  window.onresize = debounce;
})

</script>
