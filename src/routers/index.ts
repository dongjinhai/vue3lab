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
  {
    path: "/editor",
    name: "Editor",
    component: () => import("../views/editor/index.vue"),
  },
  {
    path: "/todo",
    name: "ToDo",
    component: () => import("../views/todo/index.vue"),
  },
  {
    path: "/chat",
    name: "Chat",
    component: () => import("../views/chat/index.vue")
  },
  {
    path: "/indexed",
    name: "IndexedDB",
    component: () => import("../views/indexedDB/index.vue")
  },
  {
    path: "/vueuse",
    name: "VueUse",
    component: () => import("../views/vueuse/index.vue")
  },
  {
    path: "/rxjs",
    name: "Rxjs",
    component: () => import("../views/rxjs/index.vue")
  },
  {
    path: "/sse",
    name: "SSE",
    component: () => import("../views/sse/index.vue")
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
