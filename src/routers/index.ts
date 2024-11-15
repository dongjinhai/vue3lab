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
<<<<<<< HEAD
    path: '/base',
    name: 'Base',
    component: () => import('../views/base/index.vue')
  },
  {
    path: '/loading',
    name: 'ListLoading',
    component: () => import('../views/list_loading/index.vue')
  },
 {
    path: '/props',
    name: 'Porps测试',
    component: () => import('../views/props/index.vue')
  } 
=======
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
  }
>>>>>>> c78d4841c20ef5f3600ae323be088b180c0cde5a
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
