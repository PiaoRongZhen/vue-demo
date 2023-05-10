<script setup>
import { reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'


const form = reactive({
    username: '',
    password: '',
})

const onSubmit = () => {
    console.log('submit!', form)
}
</script>

<template>
    <el-container class="login-container">
        <el-main>
            <el-form :model="form">
                <el-form-item>
                    <el-input v-model="form.username" :prefix-icon="User" clearable />
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.password" :prefix-icon="Lock" clearable show-password />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </el-main>
    </el-container>
</template>

<style scoped>
.login-container {
    height: 100vh;
    width: 100vw;
}

.el-main {
    display: flex;
    align-items: center;
    justify-content: center;
}

.el-input {
    width: 300px;
}

.el-button {
    width: 300px;
}
</style>