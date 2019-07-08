import Products from "@/components/Products.vue";
import Home from "@/components/Home.vue";
import Sugestions from "@/components/Sugestions.vue";
import NewProduct from "@/components/NewProduct.vue";

const routes = [
    {
        name: "home",
        path: "/home",
        label: "Início",
        component: Home,
        visibleOnMenu: true
    },
    {
        name: "products",
        path: "/products",
        label: "Produtos",
        component: Products,
        visibleOnMenu: true
    },
    {
        name: "sugestions",
        path: "/sugestions",
        label: "Sugestões",
        component: Sugestions,
        visibleOnMenu: true
    },
    {
        name: "new-product",
        path: "/new-product",
        label: "Produto",
        component: NewProduct,
        visibleOnMenu: false
    }
];

export default routes;