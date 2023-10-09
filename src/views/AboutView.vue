<script setup>
import { ref } from 'vue';

const mostrar_sb = ref(false);
const mostrar_ct = ref(false)


function toggleSobreNos() {
    mostrar_sb.value = !mostrar_sb.value;
    if (!mostrar_sb.value) {
        Voltar();
    }
}


function toggleContato() {
    mostrar_ct.value = !mostrar_ct.value;
    if (!mostrar_ct.value) {
        Voltar();
    }
}

function Voltar() {
    mostrar_sb.value = false;
    mostrar_ct.value = false;
}

import { useRouter } from 'vue-router';
const router = useRouter()
function goHome() {
    router.push('/home')
}
function goAlugado() {
    router.push('/alugado')
}
</script>
<template>
     
    <div class="title">
        <h1 @click="goHome" class="name-titleL">IfCoders</h1>
    </div>
    <div class="body">
    <div class="img">
        <img src="https://i.pinimg.com/564x/f5/47/99/f54799e42148e400a5d2b448a40a6a6e.jpg  ">
    </div>
    <div class="termo">
        <p>O usuário do imóvel, após o uso do mesmo, é responsável <br>
            por manter o espaço limpo e higienizado, assegurando que o ambiente <br>
            seja mantido em condições adequadas de higiene e ordem durante sua <br>
            ocupação. Ao entregar o imóvel, o usuário deve garantir que ele esteja <br>
            nas mesmas condições em que foi inicialmente recebido, cumprindo <br>
            assim com a responsabilidade de preservar a limpeza e organização <br>
            do espaço. Isso implica em cuidar da limpeza regular, evitando danos <br>
            desnecessários e tomando precauções para manter a integridade do <br>
            imóvel, a fim de garantir uma transição tranquila e agradável para o <br>
            próximo usuário. </p>
    </div>
</div>
<hr>
<div class="compra">
    <div class="info">
        <h1>R$450.00</h1>
    </div>  
    <div class="info">
        <p>Joinville/SC</p>
    </div>
    <div class="info">
        <p>Rua:Manoel Ribas</p>
    </div>
    <input class="ckbx-term" type="checkbox" name="a" id="a">
    <label class="txt-ckbx" for="">Aceito os termos acima</label>
    <div class="aluga">
        <button  class="botao-alugar" @click="goAlugado">Alugar</button>
    </div>
</div>
</template>

<style>

.aluga{
 display: flex;
 margin: 0 auto;
}
.compra{
    display: flex;
    width: 42%;
    flex-wrap: wrap;
    margin: 0 auto;
}
*{
    margin: 0;
    
}
.body{
    display: flex;
    margin-top: 54px;
}
.name-titleL {
    color: rgb(34, 161, 34);
    cursor: pointer;
    transition: 0.5s;
    margin-top: 0px;
    margin-bottom: 0px;
}

.name-titleL:hover {
    font-size: 35px;

}
.title {
    position: fixed;
    top: 0px;
    left: 0;
    width: 100%;
    height: 54px;
    border: 0;
    background-color: rgb(44, 40, 40);
    text-align: left;
    font-family: 'Poppins', sans-serif;
    color: rgb(200, 221, 200);
    font-weight: bold;
    z-index: 3;
}

@keyframes slide {
    from {


        opacity: 0;
    }


    to {


        opacity: 1;
    }


}


@keyframes ease {
    from {


        width: 0px;
    }


    to {


        width: 400px;
    }
}


.ckbx-term {
    width: 20px;
}

.botao-alugar {
    border: 0;
    height: 60px;
    width: 150px;
    background-color: #2A823D;
    font-family: 'Poppins';
    color: aliceblue;
    font-size: 24px;
    border-radius: 10px;
    transition: 0.5s;
}

.botao-alugar:hover {
    background-color: #2e7a3f;
    transform: scale(1.1);
    transition: all 0.5s;
}

.termo {
    font-family: 'Poppins';
    font-size: 22px;
    width: 80%;
    padding: 30px 0px 0px 20px;
}

.localidadeTwo {
    font-family: 'Poppins';
    font-size: 23px;
}

.localidade {
    font-family: 'Poppins';
    bottom: 130px;
    font-size: 23px;
}

.valor {
    font-weight: 400;
    color: #2A823D;
}
.info{
    margin: 0 20px;
    display: flex;
    align-items: center;

}
label{
    display: flex;
    align-items: center;
    margin-left: 5px;
}
@media (max-width: 1000px){
    .body{
        flex-wrap: wrap;
        width: 500px;
    }
}
@media (max-width: 500px){
    .body{
        width: 100%;
    }
    img{
        width: 100%;
    }
}
</style>
