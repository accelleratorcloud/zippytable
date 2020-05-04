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
    tr{
        background-color: #4dceff !important;
        th{
            td{
                color:white;
                font-weight: 600;
                letter-spacing: 1px;
            }
        }
    }
</style>