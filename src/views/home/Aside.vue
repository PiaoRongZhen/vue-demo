<script setup>
import { useRouter, useRoute } from 'vue-router'
import { watch } from 'vue'
import { ref } from 'vue'

const router = useRouter()

const handleSelect = (key) => {
    router.push('/' + key)
}

const route = useRoute()
const activeIndex = ref('home')

if (route.path.includes('home')) {
    activeIndex.value = route.path.substring(1)
}

watch(
    () => route.path,
    newPath => {
        if (newPath.includes('home')) {
            activeIndex.value = newPath.substring(1)
        }
    }
)

</script>

<template>
    <el-container>
        <el-header>
            <el-text type="success">vue-demo</el-text>
        </el-header>
        <el-main>
            <el-menu active-text-color="#ffd04b" background-color="#545c64" text-color="#ffffff" @select="handleSelect"
                :default-active="activeIndex">
                <el-menu-item index="home">
                    <span>home</span>
                </el-menu-item>
                <el-sub-menu index="home/admin">
                    <template #title>
                        <span>admin</span>
                    </template>
                    <el-menu-item index="home/admin/table">table</el-menu-item>
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