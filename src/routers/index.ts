import { createRouter, createWebHashHistory } from "vue-router";
import type { Router, RouteRecordRaw } from 'vue-router';

type ModuleComp = typeof import("../views/home/index.vue")

const components: Record<string, ModuleComp> = import.meta.glob(["../views/**/index.vue"], { eager: true });
console.log(components);

const routes: RouteRecordRaw[] = [];

Object.keys(components).forEach((key) => {
  const module: ModuleComp = components[key];
  console.log(key, module);

  routes.push({
    path: `/${module?.default?.name}`,
    name: module?.default?.name,
    component: () => module,
  });
});

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export { router, routes };
