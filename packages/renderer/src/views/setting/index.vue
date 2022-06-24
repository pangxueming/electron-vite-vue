<template>
  <div class="setting-page">
    <div class="left-container">
      <img class="setting-icon" :src="settingIcon" />
      <div class="back-icon-container">
        <img class="back-icon" @mouseenter="changeIcon('back')" @mouseleave="recoveryIcon('back')" :src="backIcon" />
      </div>
    </div>

    <div class="center-container">
      <!-- 语言 -->
      <div class="setting-item">
        <div class="title">{{ settings.language.title }}</div>
        <el-select v-model="settings.language.value" class="container w-4rem" size="large">
          <el-option v-for="item in settings.language.selectOpts" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <!-- 服务器地址 -->
      <div class="setting-item">
        <div class="title">{{ settings.serverAddress.title }}</div>
        <el-input v-model="settings.serverAddress.value" class="container w-4rem h-40" />
      </div>
      <!-- 服务器端口 -->
      <div class="setting-item">
        <div class="title">{{ settings.serverPort.title }}</div>
        <el-input v-model="settings.serverPort.value" class="container w-4rem h-40" />
      </div>
      <!-- 版本服务器端口 -->
      <div class="setting-item">
        <div class="title">{{ settings.versionServerAddress.title }}</div>
        <el-input v-model="settings.versionServerAddress.value" class="container w-4rem h-40" />
      </div>
    </div>

    <div class="right-container">
      <img class="save-icon" @mouseenter="changeIcon('save')" @mouseleave="recoveryIcon('save')" :src="saveIcon" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import { useI18n } from 'vue-i18n';
import { langStore } from '@/store';
import { LanguageType } from '@/types';

const { tm, locale } = useI18n();
const store = langStore();

const backIcon = ref('src/assets/match3/icon/setting/return-btn.png');
const saveIcon = ref('src/assets/match3/icon/setting/save-btn.png');

const settings = reactive({
  language: {
    title: tm('setting.language'),
    selectOpts: [
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
    ],
    value: ''
  },
  serverAddress: {
    title: tm('setting.serverAddress'),
    value: ''
  },
  serverPort: {
    title: tm('setting.serverPort'),
    value: ''
  },
  versionServerAddress: {
    title: tm('setting.versionServerAddress'),
    value: ''
  }
})

const settingIcon = computed(() => {
  let url: string = 'src/assets/match3/icon/setting/setting-logo-';
  switch (store.language) {
    case LanguageType.Chinese:
      url += `${LanguageType.Chinese}.png`;
      break;

    case LanguageType.English:
      url += `${LanguageType.English}.png`;
      break;

    case LanguageType.Taiwan:
      url += `${LanguageType.Taiwan}.png`;
      break;

    default:
      url += `${LanguageType.Taiwan}.png`;
      break;
  }
  return url;
})

function changeIcon(type: string) {
  const url = 'src/assets/match3/icon/setting/';
  if (type === 'back') {
    backIcon.value = url + 'return-btn-onclick.png';
  } else {
    saveIcon.value = url + 'save-btn-onclick.png';
  }
}

function recoveryIcon(type: string) {
  const url = 'src/assets/match3/icon/setting/';
  if (type === 'back') {
    backIcon.value = url + 'return-btn.png';
  } else {
    saveIcon.value = url + 'save-btn.png';
  }
}

// function handleChange() {
//   store.setLanguage(value.value);

//   locale.value = value.value;
// }

// function changeLanguage() {
//   store.setLanguage(value.value);

//   locale.value = value.value;
// }

</script>

<style scoped lang="scss">
.setting-page {
  padding: .8rem .2rem .2rem;
  height: 100%;
  width: 100%;
  display: flex;
  font-size: .5rem;
  color: #666;

  .left-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;

    .setting-icon {
      width: 3.5rem;
    }

    .back-icon-container {
      margin-top: 1rem;
      width: 2rem;
      height: 2rem;

      .back-icon {
        width: 1rem;
        margin-right: 1em;
      }
    }
  }

  .center-container {
    flex: 3;
    padding: 0 1rem;

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
  }

  .right-container {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .save-icon {
      width: 2rem;
    }
  }
}

.w-4rem {
  width: 4rem;
}

.h-40 {
  height: 40px;
}
</style>
