<template>
  <div>
    <q-separator></q-separator>
    <div class="container-wider">
      <div ref="tableSectionColumn1" class="site--exercise">
        <div class="row q-my-md">
          <div class="col">
            <q-btn
              class="non-selectable no-outline"
              label="CLEAR YOUR LIST"
              @click="clearRows()"
            ></q-btn>
          </div>
        </div>
        <div class="row q-my-md">
          <div class="col">
            <!-- <q-table
              flat
              bordered
              :rows="tableData"
              :columns="tableColumns"
              row-key="name"
              hide-header
              hide-bottom
              :rows-per-page-options="[0]"
            ></q-table> -->
          </div>
        </div>
        <div class="row q-my-md">
          <div class="col text-right">
            <q-btn
              class="non-selectable no-outline"
              icon="assignment"
              label="ADD VERB"
              @click="addRow()"
            ></q-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import table1Data from "src/data/table1Data.js";

export default defineComponent({
  name: "YourListComponent",
  methods: {
    clearRows() {},
    addRow() {},
  },
  data() {
    return {};
  },
});
</script>

<style scoped></style>
