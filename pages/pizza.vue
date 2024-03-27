<template>
   
    <div class="search">
            <input type="text" id="inputPassword5" class="form-control" placeholder="جستجوی غذا...">
            <button class="btn btn-danger me-3">جستجو</button>
        </div>
        <section class="section">
            <div class="pizza mt-5">
            <div class="title mt-5 ">
              <h2>انواع پیتزا</h2>
            </div>
            <div class="cards mt-5 mb-5">
            <div class="f" v-for="(pizzas,index) in pizza" :key="index">
            <div class="card" style="width: 18rem;">
              <img :src="pizzas.image" class="card-img-top" alt="..." height="170px">
              <div class="card-body">
                  <h5 class="card-text">{{ pizzas.name }}</h5>
                  <div class="icon">
                   <i class="bi bi-star-fill" style="color:orange;"></i><i class="bi bi-star-fill" style="color:orange;" ></i> <i class="bi bi-star-fill" style="color:orange;"></i> <i class="bi bi-star-fill" style="color:orange;"></i>
                  </div>
              </div>
              <div class="m">
                <p>{{ pizzas.m }}</p>
              </div>
              <div class="cost">
                <h6 class="c">قیمت : {{ pizzas.cost }} هزار تومان</h6>
              </div>

              <a to="/sabad" class="btn btn-danger" style="width: 25%;margin:1rem 1rem 1rem 1rem" @click.prevent="AddPizza(pizzas)">افزودن</a>
              </div>
            </div>
          </div>
          </div>

        </section>
</template>

<script setup>
import Swal from 'sweetalert2'
import {useCartStore} from '../stores/cart'
const cart=useCartStore();

function AddPizza(pizzas){

  const { User } = use();
  if(User.value){
    cart.AddPizza(pizzas)

  }
  else{
    Swal.fire({
            text: "لطفا ابتدا وارد حساب خود شوید",
            icon: "error",
            background:'#dc3545',
            iconColor:'white',
            color:'white',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top-right',
        });
        return navigateTo('/login')
  }
}


  const pizza=reactive([
    {
      id:1,
      name:'پیتزا چیکن',
      image:'/image/9.webp',
      cost:220
    },

  {
      id:9,
      name:'پیتزا مارگاریتا',
      image:'/image/pitza1.jpg',
      m:'مرغ،پنیز پیتزامخصوص بیت،زیتون سیاه،گوجه',
      cost:175
    },
    {
      id:10,
      name:'پیتزا بیکن',
      image:'/image/pitza2.jpeg',
      m:'بیکن گوساله،اسفناج،قارچ،سس سیر',
      cost:193
    },
    { 
      id:11,
      name:'پیتزا پپرونی',
      image:'/image/pitza3.jpg',
      m:'سوسیس پپرونی،قارچ،فلفل دلمه،سس مخصوص',
      cost:155
    },
    {
      id:12,
      name:'پیتزا استیک',
      image:'/image/pitza4.jpg',
      m:'گوشت استیک،قارچ،زیتون سیاه،پنیر مخصوص',
      cost:273
    },
    {
      id:13,
      name:'پیتزا گوشت و قارچ',
      image:'/image/pitza5.jpg',
      m:'گوشت گوساله،قارچ،فلفل دلمه',
      cost:250
    },
    {
      id:14,
      name:'پیتزا سبزیجات',
      image:'/image/pitza6.jpg',
      m:'قارچ،نخود سبز،هویج،ذرت،فلفل دلمه',
      cost:120
    },
  ])
</script>

<style scoped>
.section{
    background: white;
    margin-bottom: 8rem;
}
.search{
    width: 60rem;
    height: 4rem;
    display: flex;
    margin-right: 18rem;
    margin-top: 10rem;
}
button{
    width: 6rem;
}
.cards{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 2rem;
  column-gap: 0rem;
  margin-right: 4rem;
}
.card{
  box-shadow: 0 5px 15px gray;
}
.title{
  margin-top:7rem ;
  text-align: center;
  border-bottom: 2px solid black;
  margin-left: 15rem;
  margin-right: 15rem;
}
.card-body{
  display: flex;
  justify-content: space-between;
}
.cost{
  margin-right: 1.2rem;
  color:red
}
.m{
    margin-right: .7rem;
}
.card-img-top:hover{
    transform: scale(.9);
    transition: .7s;
}
</style>