import { createApp } from 'vue';
import { setupAssets } from './plugins';
import { setupRouter } from './router';
import { setupStore } from './store';
import { setupElement } from './element';
import { setupI18n } from './i18n';
import { setupRem } from './utils/rem';

import App from './App.vue';

async function setuApp() {
  setupAssets();

  const app = createApp(App);

  setupRouter(app);

  setupStore(app);

  setupElement(app);

  setupI18n(app);

  setupRem();

  app.mount('#app').$nextTick(window.removeLoading);
}

setuApp();
