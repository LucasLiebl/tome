<script setup>
import AlphaCCircleOutline from 'vue-material-design-icons/AlphaCCircleOutline.vue'
import EmailOutline from 'vue-material-design-icons/EmailOutline.vue' 
import PhoneOutline from 'vue-material-design-icons/PhoneOutline.vue'
import { imoveis } from '@/_data/imoveis.js';
import { ref } from 'vue';

const flt_qntd = ref('')
const flt_tipo = ref('')
const estado = ref('')
const mostrar_sb = ref(false);
const mostrar_ct = ref(false)
const form_invisible = ref(true)


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

function filtrar() {


}
import { useRouter } from 'vue-router';
const router = useRouter()

function goAlugar(imovel){
router.push({
  name: 'alugar',
  params: {
    id: imovel.id
  },
  props: {
    imovel
  }
})
}
</script>


<template>
  <div class="header">
    <h1 class="name-title" >IfCoders</h1>
<div class="buttons">
      <button @click="toggleSobreNos" class="sobre-nos">{{ mostrar_sb ? 'Voltar' : 'Sobre nós'
      }}</button>
      <div v-if="mostrar_sb" class="sobre">
        <p class="text-sobre">
          Somos a <span style="color:rgb(34, 161, 34);">IfCoders</span>, uma inovadora empresa de locação de imóveis
          fundada por dois jovens empreendedores programadores. Unimos tecnologia e expertise no mercado imobiliário para
          simplificar e aprimorar a experiência de locação. Nossa plataforma intuitiva e orientada por dados conecta
          proprietários e inquilinos de forma rápida e segura. Valorizamos o atendimento ao cliente e buscamos criar uma
          comunidade confiável e sustentável. Junte-se a nós nessa jornada rumo a uma locação de imóveis mais inteligente
          e gratificante. Bem-vindo à <span style="color:rgb(34, 161, 34);">IfCoders</span>!
        </p>
      </div>
    
      <button @click="toggleContato" class="contato">{{ mostrar_ct ? 'voltar' : 'Contato' }}</button>
      <div v-if="mostrar_ct" class="sobre">
        <p>Entre em contato conosco! Estamos aqui para ajudar. Use o numero abaixo ou nosso email de contato
          para falar conosco. Esperamos por sua mensagem! <br>
          <span style="color:rgb(34, 161, 34);"><PhoneOutline/>: (47)984975167 </span><br>
          <span style="color:rgb(34, 161, 34);"><EmailOutline/>: ifCoders@gmail.com</span>
        </p>
      </div>
    </div>
  </div>


  
    <div class="form-floating">
  <select class="form-select">
    <option value="0">Selecione o Tipo de imovel</option>
    <option value="1">Apartamento</option>
    <option value="2">Casa</option>
    <option value="3">Chacara</option>
  </select>

  
    <select class="form-estado" placeholder="Selecione Seu Estado">
      <option value="">Selecione Seu Estado</option>
      <option value="AC">Acre</option>
      <option value="AL">Alagoas</option>
      <option value="AP">Amapá</option>
      <option value="AM">Amazonas</option>
      <option value="BA">Bahia</option>
      <option value="CE">Ceará</option>
      <option value="DF">Distrito Federal</option>
      <option value="ES">Espirito Santo</option>
      <option value="GO">Goiás</option>
      <option value="MA">Maranhão</option>
      <option value="MS">Mato Grosso do Sul</option>
      <option value="MT">Mato Grosso</option>
      <option value="MG">Minas Gerais</option>
      <option value="PA">Pará</option>
      <option value="PB">Paraíba</option>
      <option value="PR">Paraná</option>
      <option value="PE">Pernambuco</option>
      <option value="PI">Piauí</option>
      <option value="RJ">Rio de Janeiro</option>
      <option value="RN">Rio Grande do Norte</option>
      <option value="RS">Rio Grande do Sul</option>
      <option value="RO">Rondônia</option>
      <option value="RR">Roraima</option>
      <option value="SC">Santa Catarina</option>
      <option value="SP">São Paulo</option>
      <option value="SE">Sergipe</option>
      <option value="TO">Tocantins</option>
      <option value="FF">Forfra</option>
    </select>

  

  <input type="number" class="pessoas-input" placeholder="Quartos desejados">
  <button @click="run_filter" class="b-filtrar">Filtrar</button>
</div>

  <div class="listagem-imoveis">
    <div v-for="imovel in imoveis" :key="imovel.id" class="card-casa">
      <img :src="imovel.img" alt="capa" class="imovel-capa">
      <hr>
      <span><button class="b-alugar" @click="goAlugar(imovel)">Alugar</button></span>
      <p class="imovel-valor">R${{ imovel.valor.toFixed(3) }}</p>
      <p class="imovel-local">{{ imovel.local }}</p>
    </div>
    <footer class="fixed-baseboard">
      <p>
        <span style="color: black;"><AlphaCCircleOutline/></span> 
        IfCoders 
        <p>
          Desenvolvimento
        </p>
      </p>
    </footer>
  </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins%3Awght%40100%3B200%3B300%3B400&display=swap%27%29%3B');
.buttons{
  display: flex;
  justify-content: center;
}
.form-floating{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  height: 80px;
  margin: 60px 30px;
  text-align: center;
}
.pessoas-input {
  text-align: center;
  border: 1px solid rgba(128, 128, 128, 0.295);
  border-radius: 5px;
}

.form-select {
  border-radius: 5px;
  background-color: transparent;
  border-color:  rgba(128, 128, 128, 0.295);
}

.form-estado{
  background-color: transparent;
  border: 1px solid rgba(128, 128, 128, 0.295);
  border-radius: 5px;
}

.b-filtrar {
  background-color: rgb(32, 133, 32);
  color: white;
  font-family: 'Poppins', sans-serif;
  border-radius: 10px;
  border: 0;
}


.listagem-imoveis { 
  display: flex;
  flex-wrap: wrap;  
  width: 100%;
  margin: 0;
  justify-content: center;
}


.card-casa {
  background-color: transparent;
  border: 1px solid rgba(128, 128, 128, 0.295);
  border-radius: 10px;
  width: 400px;
  height: 410px;
  margin: 20px;
}

.contato {
  background-color: transparent;
  color: rgb(200, 221, 200);
  border: 0;
}


.sobre-nos {
  background-color: transparent;
  color: rgb(200, 221, 200);
  border: 0;
  margin-left: 20px;
}


.sobre {
  position: absolute;
  margin-left: 24px;
  padding: 20px;
  top: 50px;
  width: 400Px;
  border-bottom-right-radius: 5px;
  height: 100vh;
  color: rgb(73, 68, 68);
  background-color: rgb(241, 235, 235);
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: ease;
  animation-duration: 0.7s;
  z-index: 3;
  border-bottom-right-radius:10px ;
  border-bottom-left-radius: 10px;
  
}


.text-sobre {
  animation-name: slide;
  animation-duration: 3s;
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


.imovel-capa {
  position: sticky;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
}


.name-title {
  color: rgb(34, 161, 34);
  margin: 0px 0px 0px 0px;
  max-width: 40%;
}


.header {
  display: flex;
  position: fixed;
  width: 100%;
  height: 50px;
  border: 0;
  background-color: rgb(44, 40, 40);
  text-align: left;
  font-family: 'Poppins', sans-serif;
  color: rgb(200, 221, 200);
  font-weight: bold;
  top: 0px;
  z-index: 10;
  margin-left: -8px;
}


.imovel-local {
  margin-top: -40px;
  margin-bottom: 50px;
  margin-left: 5px;
  color: rgb(15, 9, 4);
  font-family: 'Poppins', sans-serif;
}


img {
  width: 300px;
  height: 300px;
}


.b-alugar {
  position: relative;
  border: 0;
  background-color: rgb(19, 88, 19);
  color: white;
  font-family: 'Poppins', sans-serif;
  border-radius: 7px;
  height: 25px;
  width: 95px;
  left: 250px;
  transition: .1s;
}
.b-alugar:hover{
  background-color: rgb(12, 65, 12);
  transform: scale(1.1);
 }


.imovel-valor {
    color: rgb(43, 73, 13);
  margin-top: -30px;
  margin-bottom: 60px;
  margin-left: 7px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
}


.fixed-baseboard {
  position: relative;
  width: 100%;
  height: 70px;
  right: 1px;
  color: rgb(32, 133, 32);
  bottom: 0px;
  display: flex;
}
@media (max-width: 500px){
  .card-casa{
    margin: 0;
  }
  .form-floating{
    grid-template-columns: 1fr 1fr;
  }
  .sobre{
    width: 300px;
    margin-left: -52px;
  }
}
</style>