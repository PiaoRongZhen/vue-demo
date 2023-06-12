<script setup>
import { ref } from 'vue'

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

const drawer = ref(false)

const handleClick = () => {
    drawer.value = true
}


</script>

<template>
    <div class="container">
        <el-table :data="tableData" border>
            <el-table-column prop="date" label="Date" />
            <el-table-column prop="name" label="Name" />
            <el-table-column prop="address" label="Address" />
            <el-table-column fixed="right" label="Operations">
                <template #default>
                    <el-button link type="primary" size="small" @click="handleClick">Detail</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination :page-size="20" layout="prev, pager, next" :total="1000" />

        <el-drawer v-model="drawer" :direction="rtl">
            <template #header>
                <h4>set title by slot</h4>
            </template>
            <template #default>
                <div>
                    <span>Hi, there!</span>
                </div>
            </template>
            <template #footer>
                <div style="flex: auto">
                    <el-button>cancel</el-button>
                    <el-button type="primary">confirm</el-button>
                </div>
            </template>
        </el-drawer>
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
}

.el-pagination {
    height: 5%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
}
</style>