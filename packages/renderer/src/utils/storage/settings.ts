import { SettingsType } from '@/typings';
import { SETTINGS_TYPE } from '@/utils';

const {
  language,
  serverAddress,
  serverPort,
  versionServerAddress,
  deviceManagementAddress,
  deviceServicePort
}: SettingsType = JSON.parse(localStorage.getItem(SETTINGS_TYPE) || '{}');

export const getDefaultSettings = (): SettingsType => ({
  language: language || 'cn',
  serverAddress: serverAddress || '192.168.1.123',
  serverPort: serverPort || '8888',
  versionServerAddress: versionServerAddress || '127.0.0.1',
  deviceManagementAddress: deviceManagementAddress || 'http://127.0.0.1:8080/match2-download',
  deviceServicePort: deviceServicePort || '12451'
});
