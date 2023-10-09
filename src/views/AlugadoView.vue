<script setup>
import AlugadoPage from '../components/AlugadoPage.vue';
import { useRouter } from 'vue-router';
const router = useRouter()

function goAlugado(){
router.push('/alugado')
}
</script>

<template>

  
    <alugado-page/>

</template>