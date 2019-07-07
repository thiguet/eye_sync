<template>
    <header class="header">
        <div class="header-container">
            <nav>
                <ul>
                    <li v-for="route in routes"
                        :key="route.name">
                        <router-link class="router-link" :to="route.path">
                            {{ route.label }}
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>    
    </header>
</template>

<script>

export default {
    name: "Header",
    props: {
        routes: {
            type: Array,
            required: true
        }
    },
    methods: {
        test() {
            console.log(this.routes);
        }
    }
}
</script>

<style>
    .header {
        width: 100%;
    }

    .header-container {
        width: 90%;
        margin-left: 5%;
        border-bottom: 1px solid rgba(0,0,0,0.2);
    }

    .header-container nav ul {
        list-style-type: none;
        padding: 0px;
    }

    .header-container nav ul li {
        display: inline-block;
    }
    
    .router-link {
        padding: 10px;
        text-decoration: none;
        color: inherit;
    }
</style>
