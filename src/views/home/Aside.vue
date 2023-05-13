<script setup>

</script>

<template>
    <el-container>
        <el-header>
            <el-text type="success">vue-demo</el-text>
        </el-header>
        <el-main>
            <el-menu active-text-color="#ffd04b" background-color="#545c64" text-color="#ffffff">
                <el-sub-menu index="1">
                    <template #title>
                        <span>Navigator One</span>
                    </template>
                    <el-menu-item-group title="Group One">
                        <el-menu-item index="1-1">item one</el-menu-item>
                        <el-menu-item index="1-2">item two</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                        <el-menu-item index="1-3">item three</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
                <el-sub-menu index="2">
                    <template #title>
                        <span>Navigator Two</span>
                    </template>
                    <el-menu-item-group title="Group One">
                        <el-menu-item index="2-1">item one</el-menu-item>
                        <el-menu-item index="2-2">item two</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                        <el-menu-item index="2-3">item three</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
                <el-sub-menu index="3">
                    <template #title>
                        <span>Navigator Three</span>
                    </template>
                    <el-menu-item-group title="Group One">
                        <el-menu-item index="3-1">item one</el-menu-item>
                        <el-menu-item index="3-2">item two</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                        <el-menu-item index="3-3">item three</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
            </el-menu>
        </el-main>
        <el-footer>
            <el-text type="success">vue-demo</el-text>
        </el-footer>
    </el-container>
</template>

<style scoped>
.el-container {
    height: 100%;
    width: 100%;
}

.el-header {
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #545c64;
}

.el-main {
    padding: 0px;

    background-color: #545c64;
}

.el-footer {
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #545c64;
}


.el-menu {
    border: 0px;
}
</style>