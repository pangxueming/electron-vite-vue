import { defineStore } from 'pinia';
import { getDefaultSettings, setItem, SETTINGS_TYPE } from '@/utils'
import { SettingsType } from '@/typings';

const settings = getDefaultSettings();

export const settingsStore = defineStore('setting-store', {
  state: () => ({
    settings
  }),

  actions: {
    // 修改缓存中的设置配置
    changeSettings(options: SettingsType) {
      this.settings = { ...this.settings, ...options };

      setItem(SETTINGS_TYPE, this.settings);
    }
  }
})
