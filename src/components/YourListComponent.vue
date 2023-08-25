<template>
  <div>
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
            <q-table
              flat
              bordered
              :rows="yourTableData.length > 0 ? yourTableData : emptyRow"
              :columns="tableColumns"
              row-key="name"
              hide-bottom
              :rows-per-page-options="[0]"
            ></q-table>
          </div>
        </div>
        <div class="row q-my-md" style="display: flex; justify-content: end">
          <div
            class="col"
            style="
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              max-width: 15em;
            "
          >
            <q-select
              v-model="selectedVerb"
              :options="tableData"
              option-value="base_form"
              option-label="base_form"
              label="Select a Verb"
              dense="dense"
            />
          </div>
          <div
            class="q-ml-md"
            style="
              display: flex;
              flex-direction: column;
              justify-content: center;
            "
          >
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
    clearRows() {
      this.yourTableData = [];
      localStorage.removeItem("yourTableData");
      this.$emit("yourListDataChanged");
    },
    addRow() {
      if (this.selectedVerb) {
        const selectedVerbData = table1Data.tableData.find(
          (entry) => entry.base_form === this.selectedVerb.base_form
        );

        if (selectedVerbData) {
          const newEntry = { ...selectedVerbData };
          this.yourTableData.push(newEntry);
          // Remove selected item from tableData
          this.tableData = this.tableData.filter(
            (item) => item.base_form !== this.selectedVerb.base_form
          );
          localStorage.setItem(
            "yourTableData",
            JSON.stringify(this.yourTableData)
          );
          this.selectedVerb = null;

          this.$emit("yourListDataChanged");
        }
      }
    },
  },
  data() {
    return {
      selectedVerb: null,
      tableColumns: table1Data.tableColumns,
      tableData: table1Data.tableData,
      yourTableData: JSON.parse(localStorage.getItem("yourTableData")) || [],
      emptyRow: [
        {
          base_form: "It's empty.",
          past_simple: "",
          past_participle: "",
          polish: "",
        },
      ],
    };
  },
});
</script>

<style scoped></style>
