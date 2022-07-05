import { SettingsType } from '@/typings';
import { getItem, SETTINGS_TYPE } from '@/utils';

const {
  language,
  serverAddress,
  managerServerPort,
  serverVersionAddress,
  equipmentManagementAddress,
  equipmentPort
}: SettingsType = getItem(SETTINGS_TYPE);

export const getDefaultSettings = (): SettingsType => ({
  language: language || 'cn',
  serverAddress: serverAddress || '192.168.1.123',
  managerServerPort: managerServerPort || '8888',
  serverVersionAddress: serverVersionAddress || '127.0.0.1',
  equipmentManagementAddress: equipmentManagementAddress || 'http://127.0.0.1:8080/match2-download',
  equipmentPort: equipmentPort || '12451'
});
