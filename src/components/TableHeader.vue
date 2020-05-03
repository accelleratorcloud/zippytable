<template>
    <tr>
        <th v-for="(header, $index) in header"
            :key="$index"
            :header="header">
            <td>{{header.identifier}}</td>
        </th>
    </tr>
</template>
<script>
export default {
    props:['header']
}
</script>
<style lang="scss" scoped>

</style>