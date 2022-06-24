type language = 'cn' | 'en' | 'tw'; // 语言

export interface SettingsType {
  language: language,
  serverAddress: string,
  serverPort: string,
  versionServerAddress: string,
  deviceManagementAddress: string,
  deviceServicePort: string
}

export type SettingsKey = {
  language: language,
  serverAddress: string,
  serverPort: string,
  versionServerAddress: string,
  deviceManagementAddress: string,
  deviceServicePort: string
}