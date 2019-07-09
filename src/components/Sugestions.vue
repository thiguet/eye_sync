<template>
    <div class="sugestions-container">
        <custom-table :rows="rows"
                      :cols="cols">
        </custom-table>
    </div>
</template>

<script>
import CustomTable from '@/components/CustomTable.vue';

const cols = [ "Código", "Produto", "Preço"],
      rows = window.rows.slice(0, 3);

export default {
    name: "sugestions",
    components: {
        CustomTable
    },
    data() {
        return {
            cols,
            rows
        }
    }
}
</script>

<style>

</style>
