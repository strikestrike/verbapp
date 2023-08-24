<template>
  <q-page>
    <main class="q-page" style="min-height: 191px">
      <header id="main-header" class="bg-primary-lighter">
        <div class="container-wider q-py-md q-px-md">
          <div id="main-buttons">
            <div class="row wrap q-gutter-sm q-px-md q-mb-md justify-center">
              <q-btn
                class="non-selectable no-outline btn-big"
                label="COLUMN 1"
                @click="handleGoBtnClick('checkcomponentcol1')"
              ></q-btn>
              <q-btn
                class="non-selectable no-outline btn-big"
                label="COLUMN 2"
                @click="handleGoBtnClick('checkcomponentcol2')"
              ></q-btn>
              <q-btn
                class="non-selectable no-outline btn-big"
                label="COLUMN 3"
                @click="handleGoBtnClick('checkcomponentcol3')"
              ></q-btn>
              <q-btn
                class="non-selectable no-outline btn-big"
                label="COLUMN 4"
                @click="handleGoBtnClick('checkcomponentcol4')"
              ></q-btn>
              <q-btn
                class="non-selectable no-outline btn-big"
                label="GAP MIX1"
                @click="handleGoBtnClick('checkcomponentmix1')"
              ></q-btn>
              <q-btn
                class="non-selectable no-outline btn-big"
                label="GAP MIX2"
                @click="handleGoBtnClick('checkcomponentmix2')"
              ></q-btn>
            </div>
            <div class="row wrap q-gutter-sm q-px-md q-mb-md justify-center">
              <q-btn
                class="non-selectable no-outline btn-big"
                label="SHUFFLE"
                @click="handleGoBtnClick('checkcomponentshuffle')"
              ></q-btn>
              <q-btn
                class="non-selectable no-outline btn-big"
                label="YOUR LIST"
              ></q-btn>
            </div>
            <div class="row wrap q-gutter-sm q-px-md q-mb-md justify-center">
              <div
                class="text-h6 btn-big q-mr-md"
                style="
                  opacity: 0.8;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                "
              >
                For Schools:
              </div>
              <q-btn
                class="non-selectable no-outline btn-big"
                label="GRADE 5"
              ></q-btn>
              <q-btn
                class="non-selectable no-outline btn-big"
                label="GRADE 6"
              ></q-btn>
              <q-btn
                class="non-selectable no-outline btn-big"
                label="GRADE 7"
              ></q-btn>
              <q-btn
                class="non-selectable no-outline btn-big"
                label="GRADE 8"
              ></q-btn>
            </div>
          </div>
        </div>
        <div class="container-wider q-py-md q-px-md">
          <tables-correct v-bind="table1Data"></tables-correct>
        </div>
        <div class="container-wider q-py-md q-px-md">
          <tables-correct v-bind="table2Data"></tables-correct>
        </div>
      </header>
      <div>
        <div ref="checkcomponentcol1">
          <CheckComponent :tableData="tabl1" keyRef="tablecol1" />
        </div>
        <div ref="checkcomponentcol2">
          <CheckComponent :tableData="tabl2" keyRef="tablecol2" />
        </div>
        <div ref="checkcomponentcol3">
          <CheckComponent :tableData="tabl3" keyRef="tablecol3" />
        </div>
        <div ref="checkcomponentcol4">
          <CheckComponent :tableData="tabl4" keyRef="tablecol4" />
        </div>
        <div ref="checkcomponentmix1">
          <CheckComponent :tableData="tabl5" keyRef="tablemix1" />
        </div>
        <div ref="checkcomponentmix2">
          <CheckComponent :tableData="tabl6" keyRef="tablemix2" />
        </div>
        <div ref="checkcomponentshuffle">
          <CheckComponent
            :tableData="tabl7"
            keyRef="tableshuffle"
            :enableDnD="true"
          />
        </div>
      </div>
    </main>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";
import table1Data from "src/data/table1Data.js";
import table2Data from "src/data/table2Data.js";

export default defineComponent({
  name: "IndexPage",
  components: {
    TablesCorrect: defineAsyncComponent(() =>
      import("components/TableCorrect.vue")
    ),
    CheckComponent: defineAsyncComponent(() =>
      import("components/CheckComponent.vue")
    ),
  },
  methods: {
    handleGoBtnClick(targetRef) {
      this.$refs[targetRef].scrollIntoView({ behavior: "smooth" });
    },
    deepCopy(obj) {
      if (obj === null || typeof obj !== "object") {
        return obj;
      }

      if (obj instanceof Date) {
        return new Date(obj);
      }

      if (obj instanceof Array) {
        const newArray = [];
        for (let i = 0; i < obj.length; i++) {
          newArray[i] = this.deepCopy(obj[i]);
        }
        return newArray;
      }

      if (obj instanceof Object) {
        const newObj = {};
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            newObj[key] = this.deepCopy(obj[key]);
          }
        }
        return newObj;
      }

      throw new Error("Unable to copy object! Its type is not supported.");
    },
    processTestData(type) {
      let result = this.deepCopy(table1Data);
      const keys = [
        "base_form_test",
        "past_simple_test",
        "past_participle_test",
        "polish_test",
      ];
      if (type == "col1") {
        result.tableData = result.tableData.map((item) => {
          let obj = item;
          obj["base_form_test"] = "";
          return obj;
        });
      } else if (type == "col2") {
        result.tableData = result.tableData.map((item) => {
          let obj = item;
          obj["past_simple_test"] = "";
          return obj;
        });
      } else if (type == "col3") {
        result.tableData = result.tableData.map((item) => {
          let obj = item;
          obj["past_participle_test"] = "";
          return obj;
        });
      } else if (type == "col4") {
        result.tableData = result.tableData.map((item) => {
          let obj = item;
          obj["polish_test"] = "";
          return obj;
        });
      } else if (type == "mix1") {
        result.tableData = result.tableData.map((item) => {
          let obj = item;
          for (let i = 0; i < keys.length; i++) {
            obj[keys[i]] = "-1";
          }
          const randomIndex = Math.floor(Math.random() * keys.length);
          obj[keys[randomIndex]] = "";
          return obj;
        });
      } else if (type == "mix2") {
        result.tableData = result.tableData.map((item) => {
          let obj = item;
          for (let i = 0; i < keys.length; i++) {
            obj[keys[i]] = "-1";
          }
          const randomIndex0 = Math.floor(Math.random() * keys.length);
          let randomIndex1 = Math.floor(Math.random() * keys.length);
          while (randomIndex1 == randomIndex0) {
            randomIndex1 = Math.floor(Math.random() * keys.length);
          }
          obj[keys[randomIndex0]] = "";
          obj[keys[randomIndex1]] = "";
          return obj;
        });
      } else if (type == "shuffle") {
        const sectionSize = 10;
        result.tableData = result.tableData.map((item) => {
          let obj = item;
          for (let i = 0; i < keys.length; i++) {
            obj[keys[i]] = obj[keys[i].substring(0, keys[i].indexOf("_test"))];
          }
          const randomIndex = Math.floor(Math.random() * keys.length);
          for (let i = 0; i < keys.length; i++) {
            if (i == randomIndex) {
              obj[keys[randomIndex]] = "";
            }
          }
          return obj;
        });

        const shuffleArray = (array) => {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
        };

        shuffleArray(result.tableData);

        for (
          let sectionStart = 0;
          sectionStart < result.tableData.length;
          sectionStart += sectionSize
        ) {
          const sectionEnd = Math.min(
            sectionStart + sectionSize,
            result.tableData.length
          );
          const sectionItems = result.tableData.slice(sectionStart, sectionEnd);

          let itemsWithNonEmpty = [];
          for (let i = 0; i < keys.length; i++) {
            itemsWithNonEmpty[keys[i]] = sectionItems.filter(
              (item) => item[keys[i]] !== ""
            );
          }

          sectionItems.forEach((item) => {
            for (let i = 0; i < keys.length; i++) {
              if (item[keys[i]] !== "") {
                const randomIndex = Math.floor(
                  Math.random() * itemsWithNonEmpty[keys[i]].length
                );
                const randomItem = itemsWithNonEmpty[keys[i]][randomIndex];

                const temp = item[keys[i]];
                item[keys[i]] = randomItem[keys[i]];
                randomItem[keys[i]] = temp;
              }
            }
          });
        }
      }
      return result;
    },
  },
  data() {
    return {
      table1Data: table1Data,
      table2Data: table2Data,
      tabl1: this.processTestData("col1"),
      tabl2: this.processTestData("col2"),
      tabl3: this.processTestData("col3"),
      tabl4: this.processTestData("col4"),
      tabl5: this.processTestData("mix1"),
      tabl6: this.processTestData("mix2"),
      tabl7: this.processTestData("shuffle"),
    };
  },
});
</script>
