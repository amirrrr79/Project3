<template>
   
    <div class="search">
            <input type="text" id="inputPassword5" class="form-control" placeholder="جستجوی غذا...">
            <button class="btn btn-danger me-3">جستجو</button>
        </div>
        <section class="section">
            <div class="kabab mt-5">
            <div class="title mt-5 ">
              <h2>انواع کباب</h2>
            </div>
            <div class="cards mt-5 mb-5">
            <div class="" v-for="(kababs,index) in kabab" :key="index">
            <div class="card" style="width: 18rem;">
              <img :src="kababs.image" class="card-img-top" alt="..." height="170px">
              <div class="card-body">
                  <h5 class="card-text">{{ kababs.name }}</h5>
                  <div class="icon">
                   <i class="bi bi-star-fill" style="color:orange;"></i><i class="bi bi-star-fill" style="color:orange;" ></i> <i class="bi bi-star-fill" style="color:orange;"></i> <i class="bi bi-star-fill" style="color:orange;"></i>
                  </div>
              </div>
              <div class="m">
                <p>{{ kababs.m }}</p>
              </div>
              <div class="cost">
                <h6>قیمت : {{ kababs.cost }} هزار تومان</h6>
              </div>

              <a href="" class="btn btn-danger" style="width: 25%;margin:1rem 1rem 1rem 1rem" @click.prevent="AddKabab(kababs)">افزودن</a>
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

function AddKabab(kababs){
  const { User } = use();
  if(User.value){
    cart.AddKabab(kababs)

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
  const kabab=reactive([
  {
      id:5,
      name:'چلوکباب بختیاری',
      image:'/image/23.jpg',
      m:'دو سیخ کباب لقمه 250 گرمی،برنج،گوجه',
      cost:200
    },
    {
      id:15,
      name:'چلوجوجه کباب',
      image:'/image/kabab1.jpg',
      m:'یک سیخ سینه مرغ 300 گرمی،برنج،گوجه',
      cost:195
    },
    {
      id:7,
      name:'چلو شیشلیک',
      image:'/image/39.webp',
      m:'شیش دنده گوسفندی،برنج،گوجه',
      cost:350
    },
    {
      id:16,
      name:'چلو کباب سلطانی',
      image:'/image/kabab5.jpg',
      m:'یک سیخ راسته 250 گرمی، برنج،گوجه',
      cost:250
    },
    {
      id:17,
      name:'چلو ماهیچه',
      image:'/image/kabab3.jpeg',
      m:'350 گرم ماهیچه گوسفندی،برنج،گوجه',
      cost:400
    },
    {
      id:18,
      name:'چلو مرغ',
      image:'/image/kabab4.jpg',
      m:'250 گرم مرغ سزخ شده،برنج،دورچین',
      cost:150
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