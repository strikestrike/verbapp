<template>
  <q-card class="no-shadow" bordered>
    <q-card-section>
      <div class="row items-center">
        <div class="col text-center">
          <span class="text-h5 fancy-underline q-px-sm">{{ title }}</span>
        </div>
      </div>
    </q-card-section>
    <q-card-section class="q-pa-none">
      <q-table
        square
        class="no-shadow"
        :dense="true"
        :rows="tableData"
        :columns="tableColumns"
        row-key="name"
        :rows-per-page-label="`Verbs per page:`"
        :pagination="pagination"
      >
        <template v-slot:body-cell="{ row, col }">
          <template v-if="speechIconInColumns.indexOf(col.name) != -1">
            <q-td>
              <q-btn
                flat
                round
                color="primary"
                class="speaker-btn"
                icon="volume_up"
                @click="playAudio(row[col.name])"
              ></q-btn>
              {{ row[col.name] }}
            </q-td>
          </template>
          <template v-else>
            <q-td>
              {{ row[col.name] }}
            </q-td>
          </template>
        </template>
      </q-table>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TableCorrect",
  props: {
    title: {
      type: String,
      required: true,
    },
    tableColumns: {
      type: Array,
      default() {
        return [];
      },
    },
    speechIconInColumns: {
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
  methods: {
    async playAudio(name) {
      if (name) {
        try {
          const audio = new Audio(`speech/${name}.mp3`);
          audio.play();
        } catch (error) {
          console.error("Error loading audio file:", error);
        }
      }
    },
  },
  setup() {
    return {
      pagination: {
        rowsPerPage: 25, // current rows per page being displayed
      },
    };
  },
});
</script>

<style scoped></style>
