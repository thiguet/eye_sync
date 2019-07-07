import Products from "@/components/Products.vue";
import Home from "@/components/Home.vue";
import Sugestions from "@/components/Sugestions.vue";

const routes = [
    {
        name: "home",
        path: "/home",
        label: "Início",
        component: Home
    },
    {
        name: "products",
        path: "/products",
        label: "Produtos",
        component: Products
    },
    {
        name: "sugestions",
        path: "/sugestions",
        label: "Sugestões",
        component: Sugestions
    }
];

export default routes;