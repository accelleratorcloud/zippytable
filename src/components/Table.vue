<template>
  <table>
    <t-header :header="tableHeaders" />
    <tbody>
      <t-row v-for="(row, $index) in tableRows" :key="$index" :row="row" />
    </tbody>
  </table>
</template>
<script>
import TableHeader from "@/components/TableHeader.vue";
import TableRow from "@/components/TableRow.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    THeader: TableHeader,
    TRow: TableRow,
  },
  beforeMount() {
    this.retrieveTableData();
  },
  computed: {
    ...mapState(["tableData"]),
    tableHeaders() {
      return Object.keys(this.tableData[0]).map((header, index) => {
        return {
          index: index,
          identifier: header,
        };
      });
    },
    tableRows() {
      return this.tableData.map((obj, idx) => {
        return Object.keys(obj).map((key, idx2) => {
          return {
            key: key,
            value:
              (!!Object.values(obj)[idx2] && Object.values(obj)[idx2]) || "N/A",
          };
        });
      });
    },
  },
  methods: {
    ...mapActions(["retrieveTableData"]),
  },
};
</script>
<style lang="scss">
table {
  width: calc(100vw - 30%);
  border-collapse: separate;
  border: 1px solid whitesmoke;
  box-shadow: 0px 0px 20px 12px whitesmoke;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  td {
    font-size: 15px;
    color: gray;
    line-height: 1.4;
    padding: 30px;
    // width:calc(100% / 7 * 2);
  }
  th {
    td {
      display: flex;
      text-transform: capitalize;
    }
  }
  tr {
    td {
      text-align: left;
    }
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
}
</style>
