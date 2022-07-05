import { string } from "yargs"

export enum StorageType {
  COOKIE = 'cookie',
  SESSION = 'sessionStorage',
  LOCAL = 'localStorage'
}
export enum LanguageKey {
  LANG = 'lang',
  LANGUAGE = 'language'
}
export enum LanguageType {
  Chinese = 'cn',
  English = 'en',
  Taiwan = 'tw'
}
export enum SuccessCode {
  ZERO = 0,
  TWO_HUNDRED = 200
}

export enum SettingsKey {
  SETTINGS = 'settings'
}

export interface AxiosRequestConfig {
  baseURL?: string
}
