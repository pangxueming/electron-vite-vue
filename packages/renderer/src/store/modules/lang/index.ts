import { defineStore } from "pinia";
import { getLanguage, setLanguage } from '@/utils/storage';
import { LanguageType } from '@/types';

export const langStore = defineStore('lang-store', {
  state: () => ({
    set: {
      language: getLanguage() || LanguageType.Chinese, // 默认中文
    }
  }),

  getters: {
    language(state) {
      return state.set.language;
    }
  },

  actions: {
    setLanguage(lang: string) {
      setLanguage(lang);
      this.set.language = lang;
    }
  }
})
