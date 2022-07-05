type language = 'cn' | 'en' | 'tw'; // 语言

export interface SettingsType {
  language: language,
  serverAddress: string,
  managerServerPort: string,
  serverVersionAddress: string,
  equipmentManagementAddress: string,
  equipmentPort: string
}

export type SettingsKey = {
  language: language,
  serverAddress: string,
  managerServerPort: string,
  serverVersionAddress: string,
  equipmentManagementAddress: string,
  equipmentPort: string
}