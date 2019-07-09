<template>
<!-- 'ct-' stands for custom table -->
    <table class="ct">
        <thead>
            <tr>
                <td class="ct-col" 
                    v-for="(col, i) in cols"
                    :key="i">
                    {{ col }}
                </td>
            </tr>
        </thead>
        <tbody>
            <tr class="ct-row" v-for="(row, j) in rows"
                :key="j">
                <td v-for="(element, k) in row"
                    :key="k">
                    {{ element }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "custom-table",
    props: {
        cols: {
            type: Array
        },
        rows: {
            type: Array
        }
    }
}
</script>

<style>
    .ct {
        border: none;
        padding: 10px;
        table-layout: fixed;
        width: 100%;
        margin-bottom : 20px;
    }

    .ct-col {
        font-weight: 800;
        font-size: 18px;
        padding: 10px 0px;
    }
    .ct-row {
        height: 40px;
    }
    .ct tr:first-child {
        margin-top: 200px; 
        height: 40px;
    }
    .ct tbody::before {
        content: '';
        display: block;
        height: 10px;
    }
</style>
