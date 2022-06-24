import { SETTINGS_TYPE } from "@/utils";
import { SettingsType } from '@/typings';
import { store, settingsStore } from '@/store';

const storeS = settingsStore(store);
// console.log(settingsStore);

// 
// console.log(storeS);


export function saveSettings() {
  // localStorage.setItem(SETTINGS_TYPE, JSON.stringify(storeS.settings));
}

export const getDefaultSettings = (): SettingsType => ({
  language: 'cn',
  serverAddress: '192.168.1.123',
  serverPort: '8888',
  versionServerAddress: '127.0.0.1',
  deviceManagementAddress: 'http://127.0.0.1:8080/match2-download',
  deviceServicePort: '12451'
})
