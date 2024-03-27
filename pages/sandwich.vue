<template>
   
    <div class="search">
            <input type="text" id="inputPassword5" class="form-control" placeholder="جستجوی غذا...">
            <button class="btn btn-danger me-3">جستجو</button>
        </div>
        <section class="section">
            <div class="sandwich mt-5">
            <div class="title mt-5 ">
              <h2>انواع ساندویچ</h2>
            </div>
            <div class="cards mt-5 mb-5">
            <div class="" v-for="(sandwichs,index) in sandwich" :key="index">
            <div class="card" style="width: 18rem;">
              <img :src="sandwichs.image" class="card-img-top" alt="..." height="170px">
              <div class="card-body">
                  <h5 class="card-text">{{ sandwichs.name }}</h5>
                  <div class="icon">
                   <i class="bi bi-star-fill" style="color:orange;"></i><i class="bi bi-star-fill" style="color:orange;" ></i> <i class="bi bi-star-fill" style="color:orange;"></i> <i class="bi bi-star-fill" style="color:orange;"></i>
                  </div>
              </div>
              <div class="m">
                <p>{{ sandwichs.m }}</p>
              </div>
              <div class="cost">
                <h6>قیمت : {{ sandwichs.cost }} هزار تومان</h6>
              </div>

              <a href="" class="btn btn-danger" style="width: 25%;margin:1rem 1rem 1rem 1rem" @click.prevent="AddSandwich(sandwichs)">افزودن</a>
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

function AddSandwich(sandwichs){

  const { User } = use();
  if(User.value){
    cart.AddSandwich(sandwichs)

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


  const sandwich=reactive([
  {
      id:6,
      name:'چیکن برگر',
      image:'/image/88.jpeg',
      m:'مرغ،پنیر پیتزا،گوجه،سس مخصوص',
      cost:125
    },
    {
      id:18,
      name:'چیزبرگر',
      image:'/image/barger2.jfif',
      m:'برگر80درصد گوشت،پنیر پیتزا',
      cost:193
    },
    {
      id:19,
      name:'ماشروم برگر',
      image:'/image/barger3.jfif',
      m:'برگر60دردصد گوشت،پنیر،قارچ',
      cost:155
    },
    {
      id:20,
      name:'دوبل برگر',
      image:'/image/barger1.jfif',
      m:'دوعدد برگر دستی 80درصد گوشت،پنیر،قارچ،گوجه',
      cost:250
    },
    {
      id:21,
      name:'خوراک بندری',
      image:'/image/barger4.jpg',
      m:'250گرم سوسیس',
      cost:65
    },
    {
      id:22,
      name:'خوراک بندری ویژه',
      image:'/image/barger4.jpg',
      m:'250 گرم سوسیس، قارچ،پنیر پیتزا',
      cost:88
    },
    {
      id:23,
      name:'هات داگ ویژه',
      image:'/image/barger6.jpg',
      m:'120 گرم هات داگ،پنیر،سس مخصوص',
      cost:88
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