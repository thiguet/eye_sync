<style scoped>
    .footer {
        width: 100%;
    }
</style>

<template>
    <div class="products-wrapper">
        <article>
            <custom-table :rows="rows"
                          :cols="cols">
            </custom-table>
        </article>
        <footer class="footer">
            <div class="footer-container">
                <router-link to="/new-product" class="router-link custom-button">Add</router-link> 
            </div>
        </footer>
    </div>
</template>

<script>
import CustomTable from '@/components/CustomTable.vue';

const cols = ["Código", "Nome", "Preço"];
window.rows = [
    [1, "Linguicinha de Pernil", '4.5'],
    [2, "Coca Cola 200 ML Zero", '13.5'],
    [3, "Hamburguer de Picanha", '7.8'],
    [4, "Salada Light", '12.9'],
    [5, "Tropeirão Veggie", '12.9'],   
];

export default {
    name: "products",
    components: {
        CustomTable
    },
    data() {
        return ({
            rows: window.rows,
            cols
        })
    }
}
</script>

<style>
    .custom-button {
        font-size: 14px;
        outline: none;
        border: none;
        padding: 10px 15px;
        border-radius: 100px;  
        background-color: rgb(253, 110, 110);
        color: white;
        cursor: pointer;
    }

    .custom-button:focus {
        transform: translateY(6px);
    }   
</style>

