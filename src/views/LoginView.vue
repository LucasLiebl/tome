<script setup>
import LoginPage from '../components/LoginPage.vue';
import { useRouter } from 'vue-router';
const router = useRouter()

function goLogin(){
router.push('/login')
}
</script>

<template>

  
    <login-page/>

</template>
