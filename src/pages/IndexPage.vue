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
                v-show="selectedButton != 'btn_grade5'"
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
                v-show="selectedButton != 'btn_grade5'"
              ></q-btn>
            </div>
            <div class="row wrap q-gutter-sm q-px-md q-mb-md justify-center">
              <q-btn
                class="non-selectable no-outline btn-big"
                label="SHUFFLE"
                @click="handleGoBtnClick('checkcomponentshuffle')"
              ></q-btn>
              <q-btn
                :class="{
                  'non-selectable': true,
                  'no-outline btn-big': true,
                  'btn-current': selectedButton == 'btn_your_table',
                }"
                @click="handleYourTableBtnClick()"
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
                :class="{
                  'non-selectable': true,
                  'no-outline btn-big': true,
                  'btn-current': selectedButton == 'btn_grade5',
                }"
                label="GRADE 5"
                @click="handleGradeBtnClick(5)"
              ></q-btn>
              <q-btn
                :class="{
                  'non-selectable': true,
                  'no-outline btn-big': true,
                  'btn-current': selectedButton == 'btn_grade6',
                }"
                label="GRADE 6"
                @click="handleGradeBtnClick(6)"
              ></q-btn>
              <q-btn
                :class="{
                  'non-selectable': true,
                  'no-outline btn-big': true,
                  'btn-current': selectedButton == 'btn_grade7',
                }"
                label="GRADE 7"
                @click="handleGradeBtnClick(7)"
              ></q-btn>
              <q-btn
                :class="{
                  'non-selectable': true,
                  'no-outline btn-big': true,
                  'btn-current': selectedButton == 'btn_grade8',
                }"
                label="GRADE 8"
                @click="handleGradeBtnClick(8)"
              ></q-btn>
            </div>
          </div>
        </div>
        <div
          class="container-wider q-py-md q-px-md"
          v-show="selectedButton != 'btn_your_table'"
        >
          <tables-correct v-bind="mainTable1Data"></tables-correct>
        </div>
        <div
          class="container-wider q-py-md q-px-md"
          v-show="selectedButton == ''"
        >
          <tables-correct v-bind="mainTable2Data"></tables-correct>
        </div>
        <div
          class="container-wider q-py-md q-px-md"
          v-show="selectedButton == 'btn_your_table'"
        >
          <your-list-component @yourListDataChanged="yourListDataUpdate" />
        </div>
      </header>
      <div>
        <div ref="checkcomponentcol1">
          <CheckComponent
            title="COLUMN 1"
            :tableData="tableData1"
            keyRef="tablecol1"
          />
        </div>
        <div ref="checkcomponentcol2">
          <CheckComponent
            title="COLUMN 2"
            :tableData="tableData2"
            keyRef="tablecol2"
          />
        </div>
        <div ref="checkcomponentcol3">
          <CheckComponent
            title="COLUMN 3"
            :tableData="tableData3"
            keyRef="tablecol3"
          />
        </div>
        <div ref="checkcomponentcol4">
          <CheckComponent
            title="COLUMN 4"
            :tableData="tableData4"
            keyRef="tablecol4"
            v-show="selectedButton != 'btn_grade5'"
          />
        </div>
        <div ref="checkcomponentmix1">
          <CheckComponent
            title="GAP MIX 1"
            :tableData="tableData5"
            keyRef="tablemix1"
          />
        </div>
        <div ref="checkcomponentmix2">
          <CheckComponent
            title="GAP MIX 1"
            :tableData="tableData6"
            keyRef="tablemix2"
            v-show="selectedButton != 'btn_grade5'"
          />
        </div>
        <div ref="checkcomponentshuffle">
          <CheckComponent
            title="Shuffle"
            :tableData="tableData7"
            keyRef="tableshuffle"
            :enableDnD="true"
          />
        </div>
      </div>
    </main>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent, getCurrentInstance } from "vue";
import table1Data from "src/data/table1Data.js";
import table2Data from "src/data/table2Data.js";
import dataGrade5 from "src/data/data.grade5.js";
import dataGrade6 from "src/data/data.grade6.js";
import dataGrade7 from "src/data/data.grade7.js";
import dataGrade8 from "src/data/data.grade8.js";

export default defineComponent({
  name: "IndexPage",
  components: {
    TablesCorrect: defineAsyncComponent(() =>
      import("components/TableCorrect.vue")
    ),
    CheckComponent: defineAsyncComponent(() =>
      import("components/CheckComponent.vue")
    ),
    YourListComponent: defineAsyncComponent(() =>
      import("components/YourListComponent.vue")
    ),
  },
  methods: {
    handleGoBtnClick(targetRef) {
      this.$refs[targetRef].scrollIntoView({ behavior: "smooth" });
    },
    handleYourTableBtnClick() {
      this.selectedButton = "btn_your_table";
      this.yourListDataUpdate();
    },
    handleGradeBtnClick(grade) {
      this.selectedButton = "btn_grade" + grade;
      if (grade == 5) {
        this.data1 = dataGrade5;
        this.updateCheckTableData(dataGrade5);
      } else if (grade == 6) {
        this.data1 = dataGrade6;
        this.updateCheckTableData(dataGrade6);
      } else if (grade == 7) {
        this.data1 = dataGrade7;
        this.updateCheckTableData(dataGrade7);
      } else if (grade == 8) {
        this.data1 = dataGrade8;
        this.updateCheckTableData(dataGrade8);
      }
    },
    yourListDataUpdate() {
      let youTableData = {
        tableColumns: table1Data.tableColumns,
        tableData: JSON.parse(localStorage.getItem("yourTableData")) || [],
      };
      this.updateCheckTableData(youTableData);
    },
    updateCheckTableData(newData) {
      this.tableData1 = this.processTestData(newData, "col1");
      this.tableData2 = this.processTestData(newData, "col2");
      this.tableData3 = this.processTestData(newData, "col3");
      if (this.selectedButton != "btn_grade5") {
        this.tableData4 = this.processTestData(newData, "col4");
      }
      this.tableData5 = this.processTestData(newData, "mix1");
      if (this.selectedButton != "btn_grade5") {
        this.tableData4 = this.processTestData(newData, "mix2");
      }
      this.tableData7 = this.processTestData(newData, "shuffle");
    },
    processTestData(originalData, type) {
      let result = this.deepCopy(originalData);
      let keys = [];
      if (this.selectedButton != "btn_grade5") {
        keys = [
          "base_form_test",
          "past_simple_test",
          "past_participle_test",
          "polish_test",
        ];
      } else {
        keys = ["base_form_test", "past_simple_test", "polish_test"];
      }
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
  },
  data() {
    return {
      selectedButton: "",
      data1: table1Data,
      data2: table2Data,
      tableData1: this.processTestData(table1Data, "col1"),
      tableData2: this.processTestData(table1Data, "col2"),
      tableData3: this.processTestData(table1Data, "col3"),
      tableData4: this.processTestData(table1Data, "col4"),
      tableData5: this.processTestData(table1Data, "mix1"),
      tableData6: this.processTestData(table1Data, "mix2"),
      tableData7: this.processTestData(table1Data, "shuffle"),
    };
  },
  computed: {
    mainTable1Data() {
      return this.data1;
    },
    mainTable2Data() {
      return this.data2;
    },
  },
});
</script>
