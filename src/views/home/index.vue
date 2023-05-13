<script setup>
import Aside from './Aside.vue'

</script>

<template>
    <el-container class="home-container">
        <el-aside width="200px">
            <Aside></Aside>
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<style scoped>
.home-container {
    height: 100vh;
    width: 100vw;
}
</style>