<template>
   
    <div class="search">
            <input type="text" id="inputPassword5" class="form-control" placeholder="جستجوی غذا...">
            <button class="btn btn-danger me-3">جستجو</button>
        </div>
        <section class="section">
            <div class="sokhari mt-5">
            <div class="title mt-5 ">
              <h2>انواع سوخاری</h2>
            </div>
            <div class="cards mt-5 mb-5">
            <div class="" v-for="(sokharis,index) in sokhari" :key="index">
            <div class="card" style="width: 18rem;">
              <img :src="sokharis.image" class="card-img-top" alt="..." height="170px">
              <div class="card-body">
                  <h5 class="card-text">{{ sokharis.name }}</h5>
                  <div class="icon">
                   <i class="bi bi-star-fill" style="color:orange;"></i><i class="bi bi-star-fill" style="color:orange;" ></i> <i class="bi bi-star-fill" style="color:orange;"></i> <i class="bi bi-star-fill" style="color:orange;"></i>
                  </div>
              </div>
              <div class="m">
                <p>{{ sokharis.m }}</p>
              </div>
              <div class="cost">
                <h6>قیمت : {{ sokharis.cost }} هزار تومان</h6>
              </div>

              <a href="" class="btn btn-danger" style="width: 25%;margin:1rem 1rem 1rem 1rem" @click.prevent="AddSokhari(sokharis)">افزودن</a>
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

function AddSokhari(sokharis){
  const { User } = use();
  if(User.value){
    cart.AddSokhari(sokharis)

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
  const sokhari=reactive([
  {
      id:4,
      name:'فیله سوخاری',
      image:'/image/f.jpg',
      m:'کیلویی',
      cost:250
    },
    {
      id:24,
      name:'فیله سوخاری دو تکه',
      image:'/image/s1.jpg',
      m:'دو تکه فیله،سیب زمینی،نان،سس سیر',
      cost:217
    },
    {
      id:25,
      name:'فیله استریپس 8 تکه',
      image:'/image/s2.jpg',
      m:'هشت تکه فیله سوخاری،سیب زمینی،سالاد کلم',
      cost:499
    },
    {
      id:26,
      name:'بال سوخاری اسپایسی',
      image:'/image/s3.jpg',
      m:'شش تکه بال سوخاری - نان ٰ- سس مخصوص - سالاد کلم - سیب زمینی',
      cost:211
    },
    {
      id:27,
      name:'بال سوخاری',
      image:'/image/s7.jfif',
      m:'کیلویی',
      cost:150
    },
    {
      id:28,
      name:'باکس اقتصادی سوخاری',
      image:'/image/s4.jpg',
      m:'2تا ران سوخاری - 3تا فیله سوخاری - قارچ سوخاری - سیب زمینی -نوشایه قوطی 2 تا',
      cost:540
    },
    {
      id:29,
      name:'کتف سوخاری اسپایسی',
      image:'/image/s5.jpg',
      m:'شش تکه کتف سوخاری - نان ٰ- سس مخصوص - سالاد کلم - سیب زمینی',
      cost:211
    },
    {
      id:30,
      name:'فیله استیریپس 4 تکه',
      image:'/image/s6.jpg',
      m:'چهار تکه فیله سوخاری - نان ٰ- سس مخصوص - سالاد کلم - سیب زمینی',
      cost:267
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