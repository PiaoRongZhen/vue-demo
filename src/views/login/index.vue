<script setup>
import { reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'

const loginForm = reactive({
    username: '',
    password: '',
})

const onSubmit = () => {
    console.log('login', loginForm)
}

</script>

<template>
    <div>
        <el-container style="height: 100vh; width: 100vw;">
            <el-main class="center">
                <el-form :model="loginForm">
                    <el-form-item>
                        <el-input v-model="loginForm.username" placeholder="账号" :prefix-icon="User" clearable />
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="loginForm.password" type="password" placeholder="密码" :prefix-icon="Lock"
                            clearable show-password />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-main>
        </el-container>
    </div>
</template>

<style scoped>
.el-input {
    height: 5vh;
    width: 25vw;
}

.el-button {
    height: 5vh;
    width: 25vw;
}

.center {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>