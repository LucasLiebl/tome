<script setup>
import HomePage from '../components/HomePage.vue';
import { useRouter } from 'vue-router';
const router = useRouter()

function goHome(){
router.push('/home')
}
</script>

<template>

  
    <home-page/>

</template>
