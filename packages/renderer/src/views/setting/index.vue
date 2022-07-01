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
                     :value="settings.language.value"
                     :selectOpts="settings.language.selectOpts"
                     @vModelLanguage="changeLanauage" />
      <!--服务器地址 -->
      <SettingInput :title="settings.serverAddress.title"
                    :value="settings.serverAddress.value" />
      <!-- 服务器端口 -->
      <SettingInput :title="settings.serverPort.title"
                    :value="settings.serverPort.value" />
      <!-- 版本服务器端口 -->
      <SettingInput :title="settings.versionServerAddress.title"
                    :value="settings.versionServerAddress.value" />
      <!-- 设备管理地址 -->
      <SettingInput :title="settings.deviceManagementAddress.title"
                    :value="settings.deviceManagementAddress.value" />
      <!-- 设备服务端口 -->
      <SettingInput :title="settings.deviceServicePort.title"
                    :value="settings.deviceServicePort.value" />

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
  onMounted
} from 'vue';
import { ElMessage } from 'element-plus';
import { useI18n } from 'vue-i18n';
import { settingsStore } from '@/store';
import { requests } from "@/services";
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

const returnIcon = ref(returnImg);
const saveIcon = ref(saveImg);
const {
  language,
  serverAddress,
  serverPort,
  versionServerAddress,
  deviceManagementAddress,
  deviceServicePort
} = store.settings;

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
  serverPort: {
    title: tm('setting.serverPort'),
    value: serverPort
  },
  versionServerAddress: {
    title: tm('setting.versionServerAddress'),
    value: versionServerAddress
  },
  deviceManagementAddress: {
    title: tm('setting.deviceManagementAddress'),
    value: deviceManagementAddress
  },
  deviceServicePort: {
    title: tm('setting.deviceServicePort'),
    value: deviceServicePort
  }
})

const settingIcon = computed(() => {
  let url: string;
  switch (store.settings.language) {
    case LanguageType.Chinese:
      url = cnLogo;
      break;

    case LanguageType.English:
      url = enLogo;
      break;

    case LanguageType.Taiwan:
      url = twLogo;
      break;

    default:
      url = cnLogo;
      break;
  }
  return url;
})

const serverStatus = ref({

})

onMounted(async () => {
  try {
    const res = await testServerAlive();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
})

function changeLanauage () {}

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

function saveSetting() {
  let key: keyof SettingsKey;
  let options: SettingsType = {
    language: 'cn',
    serverAddress: '',
    serverPort: '',
    versionServerAddress: '',
    deviceManagementAddress: '',
    deviceServicePort: ''
  };

  for (key in settings) {
    options = { ...options, [key]: settings[key].value };
  }

  store.changeSettings(options);
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
