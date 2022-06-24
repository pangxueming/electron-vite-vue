import type { App } from 'vue'
import { createI18n } from 'vue-i18n';
import { langStore, store } from '@/store';
import messages from './lang';

const storeL = langStore(store);

const i18n = createI18n({
  locale: storeL.language || 'cn',
  fallbackLocale: 'en',
  messages
})

export function setupI18n(app: App) {
  app.use(i18n);
};
