const dataGrade5 = {
  title: "OK",
  speechIconInColumns: ["base_form", "past_simple"],
  tableColumns: [
    {
      name: "base_form",
      required: true,
      label: "BASE FORM",
      align: "left",
      field: (row) => row.base_form,
      format: (val) => `${val}`,
      sortable: true,
    },
    {
      name: "past_simple",
      label: "PAST SIMPLE",
      align: "left",
      field: (row) => row.past_simple,
      format: (val) => `${val}`,
      sortable: true,
    },
    {
      name: "polish",
      label: "POLISH",
      align: "left",
      field: "polish",
      sortable: true,
    },
  ],
  tableData: [
    {
      base_form: "be",
      past_simple: "was/were",
      polish: "by\u0107",
      base_form_test: "",
      past_simple_test: "-1",
      polish_test: "-1",
    },
    {
      base_form: "buy",
      past_simple: "bought",
      polish: "kupowa\u0107",
      base_form_test: "",
      past_simple_test: "-1",
      polish_test: "-1",
    },
    {
      base_form: "come",
      past_simple: "came",
      polish: "przychodzi\u0107, przyje\u017Cd\u017Ca\u0107",
      base_form_test: "",
      past_simple_test: "-1",
      polish_test: "-1",
    },
    {
      base_form: "do",
      past_simple: "did",
      polish: "robi\u0107",
      base_form_test: "",
      past_simple_test: "-1",
      polish_test: "-1",
    },
    {
      base_form: "drink",
      past_simple: "drank",
      polish: "pi\u0107",
      base_form_test: "",
      past_simple_test: "-1",
      polish_test: "-1",
    },
    {
      base_form: "eat",
      past_simple: "ate",
      polish: "je\u015B\u0107",
      base_form_test: "",
      past_simple_test: "-1",
      polish_test: "-1",
    },
    {
      base_form: "feel",
      past_simple: "felt",
      polish: "czu\u0107",
      base_form_test: "",
      past_simple_test: "-1",
      polish_test: "-1",
    },
    {
      base_form: "get",
      past_simple: "got",
      polish: "dosta\u0107",
      base_form_test: "",
      past_simple_test: "-1",
      polish_test: "-1",
    },
    {
      base_form: "give",
      past_simple: "gave",
      polish: "dawa\u0107",
      base_form_test: "",
      past_simple_test: "-1",
      polish_test: "-1",
    },
    {
      base_form: "go",
      past_simple: "went",
      polish: "i\u015B\u0107, jecha\u0107",
      base_form_test: "",
      past_simple_test: "-1",
      polish_test: "-1",
    },
    {
      base_form: "have",
      past_simple: "had",
      polish: "mie\u0107",
      base_form_test: "",
      past_simple_test: "-1",
      polish_test: "-1",
    },
    {
      base_form: "make",
      past_simple: "made",
      polish: "robi\u0107",
      base_form_test: "",
      past_simple_test: "-1",
      polish_test: "-1",
    },
    {
      base_form: "meet",
      past_simple: "met",
      polish: "spotka\u0107",
      base_form_test: "",
      past_simple_test: "-1",
      polish_test: "-1",
    },
    {
      base_form: "put",
      past_simple: "put",
      polish: "k\u0142a\u015B\u0107",
      base_form_test: "",
      past_simple_test: "-1",
      polish_test: "-1",
    },
    {
      base_form: "take",
      past_simple: "took",
      polish: "bra\u0107",
      base_form_test: "",
      past_simple_test: "-1",
      polish_test: "-1",
    },
  ],
};

export default dataGrade5;
