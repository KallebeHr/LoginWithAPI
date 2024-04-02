<template>
  <div>
    <header >
      <a href="#" class="logo">ToDoList</a>
      <ul >
        <li><a style="color:black;" href="#"><router-link to="/">Início</router-link></a></li>
        <li><a><router-link to="/toDoList">ToDoList</router-link></a></li>
        <li><a><router-link to="/login">Autenticação</router-link></a></li>
      </ul>
    </header>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router'

export default {
  name: 'HeaderAndNav',
  setup() {
}
}
</script>


<style scoped>
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: .6s;
  padding:10px;
  z-index: 100000;
  border-radius: 16px;
  font-family: "Raleway", sans-serif;
}
.headerMenu{
  position: fixed;
  top: 0;
  z-index: 999;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 15rem;
  background: #fafaf8;
  border-radius: 16px;
  box-shadow: 0 10px 7px rgba(0, 0, 0, 0.1);
  border-radius: 0rem 0rem 3rem 3rem;
  margin-top: 30px;
  
} 
header .logo {
  font-weight: 800;
  color: black;
  font-size: 1.2rem;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  transition: .6s;
}
.headerMenu {
  margin-top: 3rem; 
}

.no-margin {
 display:none;
}
.bnt-menu{
  width:100%;
  background-color: transparent; 
  font-weight: 700;
  letter-spacing: 3px;
  margin: 5px;
  padding: 10px;
  color: #1e1e1e;
  font-size: 15px;
  transition: .6s;
  border: none;
  box-shadow:none;
  text-transform:none;
  --v-btn-height: 0;
}

.bnt-menu:hover{
  box-shadow:none;
  background: none;
  background-color: none;
}
header ul {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
}

header ul li {
  list-style: none;
}

header ul li a {
  margin: 0 15px;
  text-decoration: none;
  color: black;
  letter-spacing: 1px;
  font-weight: 600;
  transition: .6s;
  font-size: 15px;
}

header ul li a:hover {
  color: #7e7e7e; 
  transition: .3s;

}

/* Estilos para telas pequenas (celulares em modo paisagem e menor) */
@media screen and (max-width: 576px) {
  header {
    width: 90%;
    padding: 20px 20px;
  }
  .headerMenu{
    width: 90%;
    padding: 30px 20px;
    margin-top: 45px;
  }
  header .logo {
    font-size: .7rem;
  }

  header ul {
    display: none;
  }
}

/* Estilos para telas médias (tablets e dispositivos maiores) */
@media screen and (min-width: 577px) and (max-width: 992px) {
  header {
    padding: 40px 50px;
  }
  .headerMenu{
    padding: 30px 50px;
    width: 80%;
  }
  header ul li a {
    margin: 0 10px;
    font-size: 12px;
    letter-spacing: 2px;
  }

  header .logo {
    font-size: 1rem;
  }
}

</style>
