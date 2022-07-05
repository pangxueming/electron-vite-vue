<template>
  <div class="setting-page">
    <div class="left-container">
      <img class="setting-icon"
           :src="settingIcon" />
      <div class="back-icon-container">
        <img class="back-icon"
             @mouseenter="changeIcon('back')"
             @mouseleave="recoveryIcon('back')"
             :src="returnIcon" />
      </div>
    </div>

    <div class="center-container">
      <!-- 语言 -->
      <SettingSelect :title="settings.language.title"
                     v-model:value="settings.language.value"
                     :selectOpts="settings.language.selectOpts" />
      <!--服务器地址 -->
      <SettingInput :title="settings.serverAddress.title"
                    v-model:value="settings.serverAddress.value" />
      <!-- 服务器端口 -->
      <SettingInput :title="settings.managerServerPort.title"
                    v-model:value="settings.managerServerPort.value" />
      <!-- 版本服务器端口 -->
      <SettingInput :title="settings.serverVersionAddress.title"
                    v-model:value="settings.serverVersionAddress.value" />
      <!-- 设备管理地址 -->
      <SettingInput :title="settings.equipmentManagementAddress.title"
                    v-model:value="settings.equipmentManagementAddress.value" />
      <!-- 设备服务端口 -->
      <SettingInput :title="settings.equipmentPort.title"
                    v-model:value="settings.equipmentPort.value" />

      <div class="server-status">

      </div>
    </div>

    <div class="right-container">
      <img class="save-icon"
           @click="saveSetting"
           @mouseenter="changeIcon('save')"
           @mouseleave="recoveryIcon('save')"
           :src="saveIcon" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  ref,
  watch,
  reactive,
  onMounted,
  onUnmounted
} from 'vue';
import { ElMessage } from 'element-plus';
import { useI18n } from 'vue-i18n';
import { settingsStore } from '@/store';
import { LanguageType } from '@/types';
import { SettingsKey, SettingsType } from '@/typings';
import {
  returnImg,
  returnImgActive,
  saveImg,
  saveImgActive,
  cnLogo,
  enLogo,
  twLogo
} from '@/utils';
import { testServerAlive } from '@/services/api/settings';
import SettingInput from './components/setting-input/index.vue';
import SettingSelect from './components/setting-select/index.vue';

const { tm, locale } = useI18n();
const store = settingsStore();
const {
  language,
  serverAddress,
  managerServerPort,
  serverVersionAddress,
  equipmentManagementAddress,
  equipmentPort
} = store.settings;

const { setSettingCache, changeSettings } = store;

const returnIcon = ref(returnImg);
const saveIcon = ref(saveImg);
let settingIcon = ref('');

const settings = reactive({
  language: {
    title: tm('setting.language'),
    selectOpts: [{
      value: 'cn',
      label: '中文',
    }, {
      value: 'en',
      label: 'English',
    }, {
      value: 'tw',
      label: '繁体',
    }],
    value: language
  },
  serverAddress: {
    title: tm('setting.serverAddress'),
    value: serverAddress
  },
  managerServerPort: {
    title: tm('setting.managerServerPort'),
    value: managerServerPort
  },
  serverVersionAddress: {
    title: tm('setting.serverVersionAddress'),
    value: serverVersionAddress
  },
  equipmentManagementAddress: {
    title: tm('setting.equipmentManagementAddress'),
    value: equipmentManagementAddress
  },
  equipmentPort: {
    title: tm('setting.equipmentPort'),
    value: equipmentPort
  }
})

function changeSettingIcon() {
  switch (language) {
    case LanguageType.Chinese:
      settingIcon.value = cnLogo;
      break;

    case LanguageType.English:
      settingIcon.value = enLogo;
      break;

    case LanguageType.Taiwan:
      settingIcon.value = twLogo;
      break;

    default:
      settingIcon.value = cnLogo;
      break;
  }
}

function changeIcon(type: string) {
  if (type === 'back') {
    returnIcon.value = returnImgActive;
  } else {
    saveIcon.value = saveImgActive;
  }
}

function recoveryIcon(type: string) {
  if (type === 'back') {
    returnIcon.value = returnImg;
  } else {
    saveIcon.value = saveImg;
  }
}

async function saveSetting() {
  let key: keyof SettingsKey;
  let options: SettingsType = {
    language: 'cn',
    serverAddress: '',
    managerServerPort: '',
    serverVersionAddress: '',
    equipmentManagementAddress: '',
    equipmentPort: ''
  };

  for (key in settings) {
    options = { ...options, [key]: settings[key].value };
  }

  changeSettings(options);

  locale.value = language;
  try {
    const res = await testServerAlive();
    if (res.success) {
      changeSettingIcon();
      setSettingCache();
    }
  } catch (err) {
    console.log(err);
  }
}
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
    max-width: 800px;
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
