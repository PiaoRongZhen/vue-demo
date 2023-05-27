<script setup>

</script>

<template>
    <el-container>
        <el-row>
            <el-col :span="12" class="left">
                <div>
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item>首页</el-breadcrumb-item>
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