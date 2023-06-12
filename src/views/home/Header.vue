<script setup>

import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { ref } from 'vue'


const breadcrumbItems = ref([])

const route = useRoute()

if (route.path.includes('home')) {
    breadcrumbItems.value = route.path.substring(1).split('/')
}

watch(
    () => route.path,
    newPath => {
        if (newPath.includes('home')) {
            breadcrumbItems.value = newPath.substring(1).split('/')
        }
    }
)

</script>

<template>
    <el-container>
        <el-row>
            <el-col :span="12" class="left">
                <div>
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item v-for="breadcrumbItem in breadcrumbItems">
                            {{ breadcrumbItem }}
                        </el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-col>
            <el-col :span="12" class="right">
                <div>
                    朴荣振
                </div>
            </el-col>
        </el-row>
    </el-container>
</template>

<style scoped>
.el-container {
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
}

.el-row {
    height: 100%;
    width: 100%;
}

.left {
    display: flex;
    align-items: center;
    justify-content: start;
}

.right {
    display: flex;
    align-items: center;
    justify-content: end;
}
</style>