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
                <button class="custom-button">Add</button> 
            </div>
        </footer>
    </div>
</template>

<script>
import CustomTable from '@/components/CustomTable.vue';

const cols = ["Código", "Nome", "Preço"];
const rows = [[123, 'asd', 'asd']];

export default {
    name: "products",
    components: {
        CustomTable
    },
    data() {
        return ({
            rows,
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
        background-color: rgba(250,150,150, 1);
        color: white;
        cursor: pointer;
    }

    .custom-button:focus {
        transform: translateY(6px);
    }   
</style>
