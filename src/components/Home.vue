<template>
    <div class="home-grid">
        <div class="grid-row">
            <label class="chart-label">
                <span>Produtos por Faixa Etária</span>
                <div class="chart-container">
                    <bar-chart
                        :data="ProductsByAge.data"
                        :options="ProductsByAge.options">
                    </bar-chart>
                </div>
            </label>
        </div>
        <div class="grid-row">
            <label class="chart-label">    
                <span>Produtos por Gênero</span>
                <div class="chart-container">
                    <bar-chart
                        :data="ProductsByGender.data"
                        :options="ProductsByGender.options">
                    </bar-chart>
                </div>
            </label>
        </div>
        <div class="grid-row">
            <label class="chart-label">
                <div class="chart-container">
                    <donut-chart
                        :data="MasculineGenderByAge.data"
                        :options="MasculineGenderByAge.options">
                    </donut-chart>
                </div>
                <span>Masculino</span>
            </label>
        </div>
        <div class="grid-row">
            <label class="chart-label">
                <div class="chart-container">
                    <donut-chart
                        :data="FeminineGenderByAge.data"
                        :options="FeminineGenderByAge.options">
                    </donut-chart>
                </div>
                <span>Feminino</span>
            </label>
        </div>
        <footer class="home-footer"></footer>
    </div>  
</template>

<script>
import BarChart from '@/components/BarChart.vue' 
import DonutChart from '@/components/DonutChart.vue' 

import ProductsByAge from '@/mocks/ProductsByAge.js';
import ProductsByGender from '@/mocks/ProductsByGender.js';
import MasculineGenderByAge from '@/mocks/MasculineGenderByAge.js';
import FeminineGenderByAge from '@/mocks/FeminineGenderByAge.js';

export default {
    name: "home",
    components: {
        BarChart,
        DonutChart
    },
    data() {
        return {
            ProductsByAge,
            ProductsByGender,
            MasculineGenderByAge,
            FeminineGenderByAge
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
    .home-footer {
        height: 80px;
    }
    .chart-label {
        font-weight: 900;
        font-size: 24px;
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

