<script setup>
import { HomeFilled, Menu } from '@element-plus/icons-vue'

</script>

<template>
    <div>
        <el-container style="height: 100vh; width: 100vw;">
            <el-aside width="10vw">
                <el-header style="height: 10vh; padding: 0px; background-color: #545c64;" class="center">
                    <span>vue-demo</span>
                </el-header>
                <el-main style="height: 90vh; padding: 0px; background-color: #545c64;">
                    <el-scrollbar>
                        <el-menu active-text-color="#ffd04b" background-color="#545c64" text-color="#ffffff">
                            <el-menu-item index="1">
                                <el-icon>
                                    <HomeFilled />
                                </el-icon>
                                <span>首页</span>
                            </el-menu-item>
                            <el-sub-menu index="2">
                                <template #title>
                                    <el-icon>
                                        <Menu />
                                    </el-icon>
                                    <span>组件</span>
                                </template>
                                <el-menu-item index="2-1">组件1</el-menu-item>
                                <el-menu-item index="2-2">组件2</el-menu-item>
                                <el-menu-item index="2-3">组件3</el-menu-item>
                                <el-menu-item index="2-4">组件4</el-menu-item>
                                <el-menu-item index="2-5">组件5</el-menu-item>
                                <el-menu-item index="2-6">组件6</el-menu-item>
                                <el-menu-item index="2-7">组件7</el-menu-item>
                                <el-menu-item index="2-8">组件8</el-menu-item>
                                <el-menu-item index="2-9">组件9</el-menu-item>
                                <el-menu-item index="2-10">组件10</el-menu-item>
                                <el-menu-item index="2-11">组件11</el-menu-item>
                                <el-menu-item index="2-12">组件12</el-menu-item>
                                <el-menu-item index="2-13">组件13</el-menu-item>
                                <el-menu-item index="2-14">组件14</el-menu-item>
                                <el-menu-item index="2-15">组件15</el-menu-item>
                            </el-sub-menu>
                        </el-menu>
                    </el-scrollbar>
                </el-main>
            </el-aside>
            <el-container width="90vw">
                <el-header style="height: 5vh; padding: 0px;" class="center">
                    Header
                </el-header>
                <el-header style="height: 5vh; padding: 0px;" class="center">Header</el-header>
                <el-main style="height: 90vh; padding: 0px;" class="center">Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped>
.el-menu {
    border: 0px;
}

.center {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>