<template>
  <div>
    <q-separator></q-separator>
    <div class="container-wider">
      <div ref="tableSectionColumn1" class="site--exercise">
        <div class="row q-my-md">
          <div class="col">
            <q-btn
              class="non-selectable no-outline"
              label="COLUMN 1"
              @click="handleReTestClick()"
            ></q-btn>
          </div>
        </div>
        <div class="row q-my-md">
          <div class="col">
            <template v-if="enableDnD == true">
              <TablesDnD
                v-bind="this.tableContentData"
                :ref="keyRef"
              ></TablesDnD>
            </template>
            <template v-else>
              <tables-test
                v-bind="this.tableContentData"
                :ref="keyRef"
              ></tables-test>
            </template>
          </div>
        </div>
        <div class="row q-my-md">
          <div class="col text-right">
            <q-btn
              class="non-selectable no-outline"
              icon="assignment"
              label="Check"
              @click="handleCheckClick()"
            ></q-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  name: "CheckComponent",
  components: {
    TablesTest: defineAsyncComponent(() => import("./TableTest.vue")),
    TablesDnD: defineAsyncComponent(() => import("./TableDnD.vue")),
  },
  props: {
    keyRef: {
      type: String,
      default() {
        return "table1";
      },
    },
    tableData: {
      type: Object,
      default: () => ({}),
    },
    enableDnD: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      tableContentData: this.tableData,
    };
  },
  methods: {
    handleReTestClick() {
      // Handle re-test click here
      this.$refs[this.keyRef]?.setCheckState("init");
    },
    handleCheckClick() {
      // Handle check click here
      this.$refs[this.keyRef]?.setCheckState("checked");
    },
  },
});
</script>

<style scoped></style>
