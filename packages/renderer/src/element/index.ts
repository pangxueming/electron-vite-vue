import type { App } from 'vue';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import zhTw from 'element-plus/es/locale/lang/zh-tw';
import en from 'element-plus/es/locale/lang/en';

import { store, settingsStore } from '@/store';
import { LanguageType } from '@/types';

const storeS = settingsStore(store);

export function setupElement(app: App) {
  switch (storeS.settings.language) {
    case LanguageType.Chinese:
      app.use(ElementPlus, {
        locale: zhCn,
        size: 'large'
      })
      break;

    case LanguageType.English:
      app.use(ElementPlus, {
        locale: en,
        size: 'large'
      })
      break;

    case LanguageType.Taiwan:
      app.use(ElementPlus, {
        locale: zhTw,
        size: 'large'
      })

    default:
      app.use(ElementPlus, {
        locale: zhCn,
        size: 'large'
      })
      break;
  }
}
