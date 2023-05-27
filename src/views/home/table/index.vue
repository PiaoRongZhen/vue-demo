<script setup>
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
</script>

<template>
    <div class="container">
        <el-table :data="tableData" border>
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
        </el-table>
        <el-pagination :page-size="20" layout="prev, pager, next" :total="1000" />
    </div>
</template>

<style scoped>
.container {
    height: 100%;
    width: 100%;
}

.el-table {
    height: 95%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
}

.el-pagination {
    height: 5%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: end;
}
</style>