import cookie from 'js-cookie';
import { LANGUAGE_KEY, LANGUAGE_STORAGE } from '@/utils/constants';
import { LanguageType, StorageType } from '@/types';

/**
 * @description: 语言-存储、获取
 * @param {*}
 * @return {*}
 * @author: gumingchen
 */
export function getLanguage(): string | null | undefined {
  let result: string | null | undefined
  switch (LANGUAGE_STORAGE) {
    case StorageType.COOKIE:
      result = cookie.get(LANGUAGE_KEY)
      break
    case StorageType.SESSION:
      result = sessionStorage.getItem(LANGUAGE_KEY)
      break
    case StorageType.LOCAL:
      result = localStorage.getItem(LANGUAGE_KEY)
      break
    default:
      result = localStorage.getItem(LANGUAGE_KEY)
      break
  }

  return result
}
export function setLanguage(language: string = LanguageType.Chinese): void {
  switch (LANGUAGE_STORAGE) {
    case StorageType.COOKIE:
      cookie.set(LANGUAGE_KEY, language)
      break
    case StorageType.SESSION:
      sessionStorage.setItem(LANGUAGE_KEY, language)
      break
    case StorageType.LOCAL:
      localStorage.setItem(LANGUAGE_KEY, language)
      break
    default:
      localStorage.setItem(LANGUAGE_KEY, language)
      break
  }
}
export function clearLanguage(): void {
  switch (LANGUAGE_STORAGE) {
    case StorageType.COOKIE:
      cookie.remove(LANGUAGE_KEY)
      break
    case StorageType.SESSION:
      sessionStorage.removeItem(LANGUAGE_KEY)
      break
    case StorageType.LOCAL:
      localStorage.removeItem(LANGUAGE_KEY)
      break
    default:
      cookie.remove(LANGUAGE_KEY)
      break
  }
}