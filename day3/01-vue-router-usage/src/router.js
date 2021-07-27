import {createRouter,createWebHashHistory} from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";

const customRoutes = [
    {
        name : "Home",
        path : "/",
        component : Home
    },
    {
        name : "About",
        path : "/about",
        component : About
    },
    {
        name : "Client",
        path : "/client/:clientId",
        component : () => import("@/views/Client")
    },
];

const router = createRouter({
    routes : customRoutes,
    history : createWebHashHistory(),
});

export default router;