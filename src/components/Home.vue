<template>
    <div class="home-grid">
        <div class="grid-row">
            <div class="chart-container">
                <bar-chart
                    :data="ProductsByAge.data"
                    :options="ProductsByAge.options"
                    chartName="Teste" >
                </bar-chart>
            </div>
        </div>
        <div class="grid-row">
            <div class="chart-container">
                <bar-chart
                    :data="ProductsByGender.data"
                    :options="ProductsByGender.options"
                    chartName="Teste" >
                </bar-chart>
            </div>
        </div>
    </div>  
</template>

<script>
import BarChart from '@/components/BarChart.vue' 

import ProductsByAge from '@/mocks/ProductsByAge.js';
import ProductsByGender from '@/mocks/ProductsByGender.js';

export default {
    name: "home",
    components: {
        BarChart,
    },
    data() {
        return {
            ProductsByAge,
            ProductsByGender
        };
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
       
    .chart-container {
        margin-left: 35px;
        width: 80%;
        padding: 5%;
    }

    .grid-row {
        display: inline-block;
        width: 50%;
    }

    @media (max-width: 794px) 
    {       
        .chart-container {
            margin-left: 8%;
            padding: 5%;
            width: 75%;
        }
        .grid-row {
            padding: 0%;
            display: inline-block;
            width: 100%;
        }    
    }
    
    @media (max-width: 600px) 
    {       
        .chart-container {
            margin-left: 0;
            padding: 0;
            width: 100%;
        }
        .grid-row {
            padding: 0%;
            display: inline-block;
            width: 100%;
        }
    }
</style>

