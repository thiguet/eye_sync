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
        saveProduct: function () {
            let preco

            try {
                preco = parseFloat(this.preco.trim());
                if(Number.isNaN(preco))
                    throw preco;
                else {
                    const data = [
                        window.rows.slice(-1,)[0][0]+1,
                        this.nome,
                        preco
                    ]; 

                    const aux = window.rows.slice(0);
                    aux.push(data);
                    window.rows = aux;
                    alert('Produto adicionado com sucesso !');
                }
            } catch(e) {
                alert('Favor digitar um preço válido !');
            }
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
    border-bottom: 1px solid rgba(0,0,0,0.2);
    outline: none;
    font-size: 16px;
    color: inherit;
    font-family: inherit;
    width: 80%;
}

</style>
