import { createRouter, createWebHashHistory } from "vue-router";

const components = import.meta.glob(["../views/**/index.vue"], { eager: true });
console.log(components);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home/index.vue"),
  },
];

Object.keys(components).forEach((key) => {
  console.log(key);
  const module = components[key];

  routes.push({
    path: `/${module.default.name}`,
    name: module.default.name,
    component: () => module,
  });
});

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export { router, routes };
