import { defineStore } from 'pinia';
import { getDefaultSettings, saveSettings } from '@/utils'
import { SettingsType } from '@/typings';

const settings = getDefaultSettings();

export const settingsStore = defineStore('setting-store', {
  state: () => ({
    settings
  }),
  
  actions: {
    changeSettings(options: SettingsType) {
      this.settings = { ...this.settings, ...options };
      saveSettings();
    }
  }
})