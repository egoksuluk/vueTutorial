import { createRouter , createWebHashHistory } from "vue-router";

const routes = [
    {
        name : "Home",
        path : "/",
        component : () => import("@/views/Home")
    },
    {
        name : "ProductList",
        path : "/product-list",
        component : () => import("@/views/Admin/Product/ProductList")
    },
    {
        name : "NewProduct",
        path : "/new-product",
        component : () => import("@/views/Admin/Product/NewProduct")
    },
    {
        name : "Cart",
        path : "/cart",
        component : () => import("@/views/Cart")
    },
];
const router = createRouter({
    routes,
    history : createWebHashHistory(),
});

export default router; 