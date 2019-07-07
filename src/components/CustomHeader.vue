<template>
    <!-- Custom Header -> ch -->
    <header class="ch">
        <div class="ch-container">
            <nav>
                <ul class="ch-list">
                    <li class="ch-list-item"
                        v-for="route in routes"
                        :key="route.name">
                        <router-link class="ch-router-link" :to="route.path">
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
    name: "custom-header",
    props: {
        routes: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>
    .ch {
        width: 100%;
    }

    .ch-container {
        width: 90%;
        margin-left: 5%;
        border-bottom: 1px solid rgba(0,0,0,0.2);
    }

    .ch-list {
        list-style-type: none;
        padding: 0px;
    }

    .ch-list-item {
        display: inline-block;
    }
    
    .ch-router-link {
        padding: 10px;
        text-decoration: none;
        color: inherit;
    }
</style>
