<script setup>
import { ref } from 'vue';

const email = ref('')
const senha = ref('')
const confSenha = ref('')

const login = ref(true)
const redefinirSenha = ref(false)

function esqueceu(){
  
if(login.value === true && redefinirSenha.value === false ){
  login.value = false
  redefinirSenha.value =true
}
}

function redefinido(){
  login.value = true;
  redefinirSenha.value = false;
}

import { useRouter } from 'vue-router';
const router = useRouter()

function goLogin(){
router.push('/home')
}
</script>

<template>
  <div id="body">
  <form class="board-login" v-if="login">
    <h1 class="welcome">Bem-Vindo a Ifcoders</h1>
    <h4>Por favor insira seu login</h4>
    <input type="email" placeholder="Email" v-model="email"> <br>
    <input type="password" name="password" placeholder="Senha" required  v-model="senha"><br>

    <button  @click="goLogin">Login</button>   
    

    <p class="esqueceu-senha" @click="esqueceu">redefinir senha</p>


  </form>

  <form class="redefinir-Senha" v-if="redefinirSenha" >

    <h1 class="welcome">Redefina sua Senha</h1>

    <input type="email" placeholder="Email" v-model="email"> <br>
    <input type="password" name="password" placeholder="Senha" required  v-model="senha"><br>
    <input type="password" name="password" placeholder="Confirmar senha" required  v-model="confSenha"><br>

    <button type="submit" @click="redefinido">Redefinir </button>

  </form>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins%3Awght%40100%3B200%3B300%3B400&display=swap%27%29%3B');
.board-login {
  background-color: #e6e4e4;
  width: 500px;
  height: 370px;
  padding: 20px;
  justify-content: center;
  text-align: center;
  border-radius: 20px;
  font-weight: 600;
  font-family:'Poppins', sans-serif;

}

.redefinir-Senha{
  top: 30%;
  left: 35%;
  background-color: #e6e4e4;
  width: 500px;
  height: 350px;
 padding: 20px;
  justify-content: center;
  text-align: center;
  border-radius: 20px;
  font-weight: 600;
  font-family:'Poppins', sans-serif;
}

input {
  width: 300px;
  height: 50px;
  background-color: rgba(217, 217, 217, 0.66);
  border: 0;
  border-radius: 10px;
  margin-bottom: 5%;
  border-radius: 11px;
  background: rgba(255, 255, 255, 0.22);
  box-shadow: 2.200000047683716px 5px 5.400000095367432px 3px rgba(0, 0, 0, 0.40);
  font-family:'Poppins', sans-serif;
  font-size: medium;
}

button {
  width: 250px;
  height: 35px;
  border: 0;
  border-radius: 7px;
  background-color: #52bd37;
  color: #FFFFFF;
  font-family:'Poppins', sans-serif;
  cursor: pointer;

  border-radius: 11px;
  background: #52bd37;
  box-shadow: 3px 4px 4px 0px rgba(0, 0, 0, 0.66);
}
.esqueceu-senha{
  color: #449231;
  font-family:'Poppins', sans-serif;
  font-weight: 600;
  cursor: pointer;
  margin-top: 29px;
  
}
.welcome {
  color: #52bd37;
  font-family:'Poppins', sans-serif;
  font-weight: 600;
}
#body{
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  align-items: center;
}
@media (max-width: 500px){
  .board-login{
    scale: 0.8;
  }
  .redefinir-Senha{
    margin-top: 2px;
  }
  .esqueceu-senha{
    margin-top: 2px;
  }
}
</style>