<template>
    <div class="sugestions-container">
        <custom-table :rows="rows"
                      :cols="cols">
        </custom-table>
    </div>
</template>

<script>
import CustomTable from '@/components/CustomTable.vue';

const cols = [ "Id", "Produto"],
      rows = [ [0, 'Teste'], [1, 'Batata']];

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
