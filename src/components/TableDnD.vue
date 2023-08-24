<template>
  <q-card class="no-shadow">
    <q-card-section class="q-pa-none">
      <q-table
        flat
        bordered
        :rows="tableData"
        :columns="tableColumns"
        row-key="name"
        hide-header
        hide-bottom
        :rows-per-page-options="[0]"
      >
        <template
          v-for="(col, colIndex) in tableColumns"
          v-slot:[`body-cell-${col.name}`]="props"
          :key="`${props.rowIndex}-${colIndex}`"
        >
          <q-td
            :class="{
              'draggable-gap': props.row[col.name + '_test'] !== '',
              'red-cell':
                checkState == 'checked' &&
                props.row[col.name + '_test'] !== '' &&
                props.row[col.name + '_test'] !== props.row[col.name],
              'droppable-section': isDroppableSection(props.rowIndex),
            }"
          >
            <template v-if="props.row[col.name + '_test'] !== ''">
              <div
                draggable="true"
                @dragstart="
                  handleDragStart(
                    props.rowIndex,
                    colIndex,
                    props.row[col.name + '_test']
                  )
                "
                @dragover="handleDragOver"
                @drop="handleDrop(props.rowIndex, colIndex)"
              >
                <div class="drop-elem"></div>
                <q-icon
                  name="open_with"
                  class="drag-handle-icon drag-handle"
                  style="font-size: 20px"
                />
                <span class="drag-handle">{{
                  props.row[col.name + "_test"]
                }}</span>
              </div>
            </template>
            <template v-else>
              {{ props.row[col.name] }}
            </template>
          </q-td>
        </template>
      </q-table>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TableDnD",
  props: {
    tableColumns: {
      type: Array,
      default() {
        return [];
      },
    },
    tableData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      sourceRowIndex: null,
      sourceColIndex: null,
      sourceValue: null,
    };
  },
  methods: {
    isDroppableSection(rowIndex) {
      const sectionSize = 10;
      return rowIndex > 0 && rowIndex % sectionSize === 0;
    },
    handleDragStart(row, col, value) {
      this.sourceRowIndex = row;
      this.sourceColIndex = col;
      this.sourceValue = value;
    },
    handleDragOver(event) {
      event.preventDefault();
    },
    handleDrop(targetRowIndex, targetColIndex) {
      if (this.sourceRowIndex !== null && this.sourceColIndex !== null) {
        // Check if the targetRowIndex is within the same section boundary
        const sectionSize = 10;
        const sourceSectionIndex = Math.floor(
          this.sourceRowIndex / sectionSize
        );
        const targetSectionIndex = Math.floor(targetRowIndex / sectionSize);

        if (sourceSectionIndex === targetSectionIndex) {
          // Swap the values of the source and target cells
          const tempValue =
            this.$props.tableData[targetRowIndex][
              this.$props.tableColumns[targetColIndex].name + "_test"
            ];
          this.$props.tableData[targetRowIndex][
            this.$props.tableColumns[targetColIndex].name + "_test"
          ] = this.sourceValue;
          this.$props.tableData[this.sourceRowIndex][
            this.$props.tableColumns[this.sourceColIndex].name + "_test"
          ] = tempValue;

          // Reset the source data
          this.sourceRowIndex = null;
          this.sourceColIndex = null;
          this.sourceValue = null;
        }
      }
    },
  },
  setup(props) {
    const checkState = ref("init");

    const clearInputs = () => {
      for (const row of props.tableData) {
        const keys = Object.keys(row);
        for (const key of keys) {
          if (key.endsWith("_test") && row[key] !== "-1") {
            row[key] = "";
          }
        }
      }
    };

    const setCheckState = (state) => {
      checkState.value = state;
      if (state === "init") {
        clearInputs();
      }
    };

    return {
      checkState,
      setCheckState,
    };
  },
});
</script>

<style scoped>
.droppable-section {
  border-top: 4px solid green !important;
}
</style>
