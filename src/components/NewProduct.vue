<template>
    <form v-on:submit="saveProduct" action="#" >
        <div class="input-container">
            <label>
                <span>Nome</span>
                <input maxlength="80" class="text-field" type="text" v-model="nome" required />
            </label>
        </div>
        <div class="input-container">
            <label>
                <span>Preço</span>
                <input class="text-field" type="text" v-model="preco" required />
            </label>
        </div>
        <button class="custom-button" type="submit">Salvar</button>
    </form>
</template>

<script>
import { SERVER_URL } from '@/config.js';  

const nome = '',
      preco = '';

export default {
    name: "new-product",
    data() {
        return {
            nome: nome,
            preco: preco
        };
    },
    methods: {
        saveProduct: function (event) {
            const data = {
                nome: this.nome,
                preco: this.preco
            }; 

            fetch('http://localhost:8001/addProduct', 
                { 
                    method: 'POST',
                    mode: 'cors',
                    cache: 'default',
                    body: data
                }).then();
        }
    }
}
</script>

<style>
.input-container {
    padding: 20px 10px;
    width: 100%;
}

.input-container label span:after {
    content: ':';
    margin-right: 5px;
}

.text-field {
    border: none;
    border-bottom: 1px solid #f87979;
    outline: none;
    font-size: 16px;
    color: inherit;
    font-family: inherit;
    width: 80%;
}

</style>
