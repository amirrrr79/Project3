<template>
    <div>
      
        <div class="search">
            <input type="text" id="inputPassword5" class="form-control" placeholder="جستجوی غذا...">
            <button class="btn btn-danger me-3">جستجو</button>
        </div>

        <div class="section mt-5">
          <div class="hero">
             <card />
          </div>

          <div class="categori mt-5">
            <div class="title">
              <h2>انواع غذا ها</h2>
            </div>

            <div class="cards mt-5">

            <NuxtLink to="/pizza"><div class="card" id="card"  style="width: 18rem;">
                <img src="/image/0.jpg" class="card-img"  width="100%" height="100%" alt="...">
          <div class="card-img-overlay">
           <h5 class="card-title">پیتزا</h5>
         </div>
              </div></NuxtLink>


              <NuxtLink to="/kabab"><div class="card" id="card" style="width: 18rem;">
                <img src="/image/1.jpg" class="card-img"  width="100%" height="100%" alt="...">
          <div class="card-img-overlay">
           <h5 class="card-title">کباب</h5>
         </div>
              </div></NuxtLink>

              <NuxtLink to="/soop"><div class="card" id="card" style="width: 18rem;">
                <img src="/image/2.jpg" class="card-img"  width="100%" height="100%" alt="...">
          <div class="card-img-overlay">
           <h5 class="card-title">سوپ</h5>
         </div>
              </div></NuxtLink>

              <NuxtLink to="/sandwich"><div class="card"  id="card" style="width: 18rem;">
                <img src="/image/3.jpg" class="card-img"  width="100%" height="100%" alt="...">
          <div class="card-img-overlay">
           <h5 class="card-title">ساندویچ</h5>
         </div>
              </div></NuxtLink>

              <NuxtLink to="/sokhari"><div class="card" id="card" style="width: 18rem;">
                <img src="/image/4.jpg" class="card-img"  width="100%" height="100%" alt="...">
          <div class="card-img-overlay">
           <h5 class="card-title">سوخاری</h5>
         </div>
              </div></NuxtLink>

              <NuxtLink to="/pasta"><div class="card" id="card" style="width: 18rem;">
                <img src="/image/5.jpg" class="card-img"  width="100%" height="100%" alt="...">
          <div class="card-img-overlay">
           <h5 class="card-title">پاستا</h5>
         </div>
              </div></NuxtLink>

              <NuxtLink to="/salad"><div class="card" id="card"  style="width: 18rem;">
                <img src="/image/6.jpg" class="card-img"  width="100%" height="100%" alt="...">
          <div class="card-img-overlay">
           <h5 class="card-title">سالاد</h5>
         </div>
              </div></NuxtLink>

              <NuxtLink to="/breakefast"><div class="card" id="card" style="width: 18rem;">
                <img src="/image/7.jpg" class="card-img"  width="100%" height="100%" alt="...">
          <div class="card-img-overlay">
           <h5 class="card-title">صبحانه</h5>
         </div>
              </div></NuxtLink>


          </div>



          </div>

          <div class="Discount mt-5">
            <div class="title">
              <h2>تخفیف دار ها</h2>
            </div>
            <div class="cards mt-5">
            <div class="" v-for="(Discounts,index) in Discount" :key="index">
            <div class="card" style="width: 18rem;">
              <img :src="Discounts.image" class="card-img-top" alt="..." height="170px">
              <div class="card-body">
                  <h5 class="card-text">{{ Discounts.name }}</h5>
                  <div class="icon">
                   <i class="bi bi-star-fill" style="color:orange;"></i><i class="bi bi-star-fill" style="color:orange;" ></i> <i class="bi bi-star-fill" style="color:orange;"></i> <i class="bi bi-star-fill" style="color:orange;"></i>
                  </div>
              </div>
              <div class="cost">
                <h6>قیمت : {{ Discounts.cost }} هزار تومان</h6>
              </div>
              <a href="" class="btn btn-danger" style="width: 25%;margin:1rem 1rem 1rem 1rem" @click.prevent="AddDiscount(Discounts)">افزودن</a>
              </div>
            </div>
          </div>
          </div>

          <div class="sell mt-5">
            <div class="title">
              <h2>پر فروش ها</h2>
            </div>
            <div class="cards mt-5">
            <div class="" v-for="(sells,index) in sell" :key="index">
            <div class="card" style="width: 18rem;">
              <img :src="sells.image" class="card-img-top" alt="..." height="170px">
              <div class="card-body">
                  <h5 class="card-text">{{ sells.name }}</h5>
                  <div class="icon">
                   <i class="bi bi-star-fill" style="color:orange;"></i><i class="bi bi-star-fill" style="color:orange;" ></i> <i class="bi bi-star-fill" style="color:orange;"></i> <i class="bi bi-star-fill" style="color:orange;"></i>
                  </div>
              </div>
              <div class="cost">
                <h6>قیمت : {{ sells.cost }} هزار تومان</h6>
              </div>
              <a href="" class="btn btn-danger" style="width: 25%;margin:1rem 1rem 1rem 1rem" @click.prevent="AddSell(sells)">افزودن</a>
              </div>
            </div>
          </div>
          </div>

          <div class="centers">
            
              <div class="text ms-5">
                 <h2>
                   سفارش آنلاین بهترین غذاها و فست فود ها
                 </h2>
                 <p>
                  با استفاده از وبسایت و اپلیکیشن دلینو شما میتوانید در کمترین زمان ممکن غذای مورد علاقتونو سفارش دهید
                 </p>
                 <img src="/image/logo.svg"  width="250px" height="100px">
              </div>
              <div class="iphone">
                  <img src="/image/iphone.png">
              </div>
          </div>

          <div class="center2">
          <div class="logo">
             <div class="logo1">
                 <img src="/image/logo1.png">
             </div>
             <div class="logo2">
              <img src="/image/logo2.png">
             </div>
             <div class="logo3">
              <img src="/image/logo3.png">
             </div>
          </div>
          <div class="text2">
            <h6>تمامی کالاها و خدمات این سایت، دارای وجوزهای لازم از مراجعه مربوطه میباشند<br>و فعالیت های این سایت تابع قوانین جمهوری اسلامی میباشد.</h6>
          </div>
          </div>




       </div>

    </div>

</template>
<script setup>
import Swal from 'sweetalert2'
import {useCartStore} from '../stores/cart'

const cart=useCartStore();

function AddDiscount(Discounts){
  const { User } = use();
  if(User.value){
    cart.AddDiscount(Discounts)

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

function AddSell(Sells){
  const { User } = use();
  if(User.value){
    cart.AddSell(Sells)

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

  const Discount=ref([
    {
      id:1,
      name:'پیتزا چیکن',
      image:'/image/9.webp',
      cost:220
    },
    { 
      id:2,
      name:'پاستا الفردو',
      image:'/image/10.webp',
      cost:109
    },
    {
      id:3,
      name:'سالاد سزار',
      image:'/image/11.jfif',
      cost:88
    },
    {
      id:4,
      name:'فیله سوخاری',
      image:'/image/f.jpg',
      cost:120
    },
  ])

  const sell=ref([
  {
      id:5,
      name:'چلوکباب بختیاری',
      image:'/image/23.jpg',
      cost:200
    },
    {
      id:6,
      name:'چیکن برگر',
      image:'/image/88.jpeg',
      cost:125
    },
    {
      id:7,
      name:'چلوشیشلیک',
      image:'/image/39.webp',
      cost:350
    },
    {
      id:8,
      name:'استیک',
      image:'/image/13.jpg',
      cost:280
    },
  ])


</script>
<style scoped>
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
.slider{
    background: white;
}
.width{
    width: 70rem;
   margin-right: 13rem;
   padding-top: 5rem;
   padding-bottom: 5rem;
}
.hero{
  display: flex;
  justify-content: center;
  padding-top: 3rem;
 
}
.hero img{
  border-radius: 2rem;
}
.section{
  background: white;
}
.title{
  margin-top:7rem ;
  text-align: center;
  border-bottom: 2px solid black;
  margin-left: 15rem;
  margin-right: 15rem;
}
.card-title{
  color:white;
  font-size:1.5rem;
  font-weight: bold;
  margin-top:7rem
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
.card-img-top:hover{
    transform: scale(.9);
    transition: .7s;
}
#card:hover{
  transform: scale(1.1);
    transition: .7s;
}
.Discount{
  margin-top:5rem
}
.card-body{
  display: flex;
  justify-content: space-between;
}
.cost{
  margin-right: 1.2rem;
  color:red
}
.centers{
  background-color: aquamarine;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:5rem
}
.text{
  text-align: center;
}
.text p{
  font-size:1rem
}
.logo{
  display: flex;
}
.center2{
 display: flex;
 align-items: center;
 justify-content: center;
 background: #f8f8f8;
 padding-bottom: 2rem;
 padding-top:2rem ;
}
.text2{
  margin-left: 2rem;
  margin-right: 2rem;
}
</style>
