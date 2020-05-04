<template>
  <div class="main-wrapper">
    <z-table />
  </div>
</template>
<script>
import Table from "@/components/Table.vue";
export default {
  name: "MainComponent",
  components: {
    ZTable: Table,
  },
  mounted() {
  },
};
</script>
<style lang="scss" scoped>
.main-wrapper {
  height: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
