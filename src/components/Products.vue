<template>
    <div class="products-wrapper">
        <article>
            <table class="products-list">
                <thead>
                    <tr>
                        <td>Código</td>
                        <td>Nome</td>
                        <td>Preço</td>
                    </tr>
                </thead>
                <!-- <hr /> -->
                <tbody>
                    <tr>
                        <td>asdasd</td>
                    </tr>
                </tbody>
            </table>
        </article>
        <footer class="footer">
            <div class="footer-container">
                <button>Add</button> 
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: "products"
}
</script>

<style>
    .footer {
        width: 100%;
    }

    button {
        font-size: 14px;
        outline: none;
        border: none;
        padding: 10px 15px;
        border-radius: 100px;  
        background-color: rgba(250,150,150, 1);
        color: white;
        cursor: pointer;
    }

    button:hover {
        transform: translateY(4px);
    }   
    .products-list {
        border: none;
        padding: 10px;
        table-layout: fixed;
        width: 100%;
        margin-bottom : 20px;
    }

    .products-list thead tr td {
        font-weight: 800;
        font-size: 18px;
        padding: 10px 0px;
    }

    .products-list hr {
        width: 300%;  
    }
</style>
