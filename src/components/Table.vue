<template>
  <table>
    <t-header :header="tableHeaders"/>
    <t-row
      v-for="(row, $index) in tableRows"
      :key="$index"
      :row="row"
    />
  </table>
</template>
<script>
import TableHeader from "@/components/TableHeader.vue";
import TableRow from "@/components/TableRow.vue";
export default {
  components: {
    THeader: TableHeader,
    TRow: TableRow,
  },
  data: () => {
    return {
      tableData: [
        {
          name: "John",
          lastName: "Doe",
          age: 22,
          address: "221B Baker Street",
          city: "London",
        },
        {
          name: "John",
          lastName: "Doe",
          age: 22,
          address: "221B Baker Street",
          city: "London",
        },
      ],
    };
  },
  computed: {
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
            value: Object.values(obj)[idx2],
          };
        });
      });
    },
  },
};
</script>
<style lang="scss" scoped></style>
