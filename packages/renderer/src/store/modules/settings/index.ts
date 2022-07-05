import { defineStore } from 'pinia';
import { getDefaultSettings, setItem, SETTINGS_TYPE } from '@/utils'
import { SettingsType } from '@/typings';

const settings = getDefaultSettings();

export const settingsStore = defineStore('setting-store', {
  state: () => ({
    settings,
  }),

  actions: {
    // 修改缓存中的设置配置
    changeSettings(options: SettingsType) {
      this.settings = { ...this.settings, ...options };
      console.log(this.settings);
    },

    getBaseURL() {
      const { serverAddress, managerServerPort } = this.settings;
      const baseURL = `http://${serverAddress}:${managerServerPort}`;

      return baseURL;
    },

    setSettingCache() {
      setItem(SETTINGS_TYPE, this.settings);
    },
  }
})
