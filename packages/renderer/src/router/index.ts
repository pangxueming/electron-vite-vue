import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
// import { transformRouteNameToRoutePath } from '@/utils';
import { createRouterGuard } from './guard';


export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'root',
      component: () => import('views/setting/index.vue')
    }
  ],
});

/** setup vue router. - [安装vue路由] */
export async function setupRouter(app: App) {
  app.use(router);
  // createRouterGuard(router);
  await router.isReady();
}

// /** 路由名称 */
// export const routeName = (key: AuthRoute.RouteKey) => key;
// /** 路由路径 */
// export const routePath = (key: Exclude<AuthRoute.RouteKey, 'not-found-page'>) => transformRouteNameToRoutePath(key);

export * from './routes';
// export * from './modules';
