<template>
   
    <div class="search">
            <input type="text" id="inputPassword5" class="form-control" placeholder="جستجوی غذا...">
            <button class="btn btn-danger me-3">جستجو</button>
        </div>
        <section class="section">
            <div class="soop mt-5">
            <div class="title mt-5 ">
              <h2>انواع سوپ</h2>
            </div>
            <div class="cards mt-5 mb-5">
            <div class="" v-for="(soops,index) in soop" :key="index">
            <div class="card" style="width: 18rem;">
              <img :src="soops.image" class="card-img-top" alt="..." height="170px">
              <div class="card-body">
                  <h5 class="card-text">{{ soops.name }}</h5>
                  <div class="icon">
                   <i class="bi bi-star-fill" style="color:orange;"></i><i class="bi bi-star-fill" style="color:orange;" ></i> <i class="bi bi-star-fill" style="color:orange;"></i> <i class="bi bi-star-fill" style="color:orange;"></i>
                  </div>
              </div>
              <div class="m">
                <p>{{ soops.m }}</p>
              </div>
              <div class="cost">
                <h6>قیمت: {{ soops.cost }} هزارتومان</h6>
              </div>

              <a href="" class="btn btn-danger" style="width: 25%;margin:1rem 1rem 1rem 1rem" @click.prevent="AddSoop(soops)">افزودن</a>
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

function AddSoop(soops){
 
  const { User } = use();
  if(User.value){
    cart.AddSoop(soops)

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

  const soop=reactive([
  {
      id:15,
      name:'سوپ شیر',
      image:'/image/soop1.jpg',
      m:'شیر،قارچ،مرغ،سبزیجات',
      cost:70
    },
    {
      id:16,
      name:'سوپ سبزیجات',
      image:'/image/soop2.jfif',
      m:'مرغ،ذرت،قارچ،سبزیجات',
      cost:50
    },
    {
      id:17,
      name:'سوپ جو',
      image:'/image/soop3.jfif',
      m:'جو،مرغ،سبزیجات،قارچ',
      cost:50
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