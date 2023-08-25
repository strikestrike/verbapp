<template>
  <q-card class="no-shadow">
    <q-card-section class="q-pa-none">
      <q-table
        flat
        :rows="tableData"
        :columns="tableColumns"
        row-key="name"
        hide-header
        hide-bottom
        :rows-per-page-options="[0]"
      >
        <template v-slot:body-cell="{ row, col }">
          <q-td
            :props="col.props"
            :class="{
              'draggable-gap': row[col.name + '_test'] == '-2',
              'gap-td':
                row[col.name + '_test'] !== '-1' &&
                row[col.name + '_test'] !== '-2',
              'test-cell': true,
              'red-cell':
                checkState == 'checked' &&
                row[col.name + '_test'] !== '-1' &&
                row[col.name + '_test'] !== row[col.name],
            }"
          >
            <template v-if="row[col.name + '_test'] == '-1'">
              {{ row[col.name] }}
            </template>
            <template v-else-if="row[col.name + '_test'] == '-2'">
              <div>
                <div class="drop-elem"></div>
                <q-icon
                  name="open_with"
                  class="drag-handle-icon drag-handle"
                  style="font-size: 20px"
                />
                <span class="drag-handle">{{ row[col.name] }}</span>
              </div>
            </template>
            <template v-else>
              <q-input class="gap-input" v-model="row[col.name + '_test']">
                <template v-slot:prepend>
                  <q-icon name="edit" />
                </template>
              </q-input>
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
  name: "TableTest",
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

<style scoped></style>
