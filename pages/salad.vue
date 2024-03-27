<template>
   
    <div class="search">
            <input type="text" id="inputPassword5" class="form-control" placeholder="جستجوی غذا...">
            <button class="btn btn-danger me-3">جستجو</button>
        </div>
        <section class="section">
            <div class="salad mt-5">
            <div class="title mt-5 ">
              <h2>انواع سالاد</h2>
            </div>
            <div class="cards mt-5 mb-5">
            <div class="" v-for="(salads,index) in salad" :key="index">
            <div class="card" style="width: 18rem;">
              <img :src="salads.image" class="card-img-top" alt="..." height="170px">
              <div class="card-body">
                  <h5 class="card-text">{{ salads.name }}</h5>
                  <div class="icon">
                   <i class="bi bi-star-fill" style="color:orange;"></i><i class="bi bi-star-fill" style="color:orange;" ></i> <i class="bi bi-star-fill" style="color:orange;"></i> <i class="bi bi-star-fill" style="color:orange;"></i>
                  </div>
              </div>
              <div class="m">
                <p>{{ salads.m }}</p>
              </div>
              <div class="cost">
                <h6>قیمت : {{ salads.cost }} هزار تومان</h6>
              </div>

              <a href="" class="btn btn-danger" style="width: 25%;margin:1rem 1rem 1rem 1rem" @click.prevent="AddSalad(salads)">افزودن</a>
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

function AddSalad(salads){
  const { User } = use();
  if(User.value){
    cart.AddSalad(salads)
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

  const salad=reactive([
  {
      id:3,
      name:'سالاد سزار',
      image:'/image/11.jfif',
      m:'مرغ،کلم،کاهو،گوجه،هویج',
      cost:88
    },
    {
      id:32,
      name:'سالاد یونانی',
      image:'/image/ss1.jpg',
      m:'کاهو پیچ، گردو، خیار، گوجه گیلاسی، پنیر سفید، زیتون سیاه',
      cost:110
    },
    {
      id:33,
      name:'سالاد فصل',
      image:'/image/ss2.jpg',
      m:'گوجه، خیار، کاهو، کلم قرمز، گوجه گیلاسی',
      cost:30
    },
    {
      id:34,
      name:'سالاد ماکارانی',
      image:'/image/ss3.webp',
      m:'ماکارانی،ژامبون،خیارشور،ذرت،سس',
      cost:70
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