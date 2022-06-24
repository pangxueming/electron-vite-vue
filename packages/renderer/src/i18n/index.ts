import type { App } from 'vue'
import { createI18n } from 'vue-i18n';
import { settingsStore, store } from '@/store';
import messages from './lang';

const storeS = settingsStore(store);

export const i18n = createI18n({
  locale: storeS.settings.language || 'cn',
  fallbackLocale: 'en',
  legacy: false,
  globalInjection: true,
  messages
})

export function setupI18n(app: App) {
  app.use(i18n);
};
