import type { App } from 'vue';
import { createPinia } from 'pinia';

/** setup vue store plugin: pinia. - [安装vue状态管理插件：pinia] */
export const store = createPinia();

export function setupStore(app: App) {
  app.use(store);
}

export * from './modules';