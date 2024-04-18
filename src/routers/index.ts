import { createRouter, createWebHashHistory } from "vue-router";
import type { Router, RouteRecordRaw } from "vue-router";

type ModuleComp = typeof import("../views/home/index.vue");

// const modules: Record<string, ModuleComp> = import.meta.glob(["../views/**/index.vue"], { eager: true });
// console.log(modules);

const routes: RouteRecordRaw[] = [
  {
    path: "/about",
    name: "About",
    component: () => import("../views/about/index.vue"),
  },
  {
    path: "/base",
    name: "Base",
    component: () => import("../views/base/index.vue"),
  },
  {
    path: "/hooks",
    name: "Hooks",
    component: () => import("../views/hooks/index.vue"),
  },
];

// Object.keys(modules).forEach((path) => {
//   const module: ModuleComp = modules[path];
//   console.log(path, module);

//   routes.push({
//     path: `/${module?.default?.name}`,
//     name: module?.default?.name,
//     component: () => module,
//   });
// });

console.log(routes);

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export { router, routes };
