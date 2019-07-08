<template>
    <div class="home-grid">
        <bar-chart></bar-chart>
        <button class="custom-button">Test</button>
    </div>  
</template>

<script>
import BarChart from '@/components/BarChart.vue'

export default {
    name: "home",
    components: {
        BarChart
    }
}
</script>

<style>
    .active-link {
        border: 1px solid #fa9696;
        border-radius: 3px;
    }
    .home-grid {
        width: 100%;
    }    
</style>
