<template>
   <div class="centers">
      <ul class="Links">
        <div class="d-flex" v-if="User" >
          <li class="ms-3" style="font-size: 1.2rem;margin-top: 1rem;"><i class="bi bi-person-circle ms-1"></i>{{ User?.name }}</li>
          <li  class="me-4"  style="margin-top: 1rem;"><i class="bi bi-box-arrow-in-left ms-2"></i><a href="" style="color:red;font-size: 1rem;" @click.prevent="logout()">خروج</a></li>
        </div>
        <div class="d-flex" v-else>
        <li class="link"><NuxtLink to="/register" class="btn btn-outline-danger"><i class="bi bi-person-add ms-2"></i>ثبت نام</NuxtLink></li>
        <li class="link"><NuxtLink to="/login" class="btn btn-outline-danger"><i class="bi bi-person ms-2"></i>ورود</NuxtLink></li>
        </div>
      </ul>
       <div class="photo">
        <img src="/image/logo.svg"  width="100px" height="50px">
       </div>
      
      <div class="sell ms-5 ICON">
        <NuxtLink to="/sabad" class="btn btn-danger"><i class="bi bi-cart4"></i></NuxtLink>
        <div class="count">{{ Count }}</div>
      </div>
   </div>
</template>
<script setup>
import Swal from 'sweetalert2'
import {useCartStore} from '../stores/cart'
const cart=useCartStore();

const Count=computed(()=> cart.count)
   const {User}=use()
   
   async function logout(){
    cart.PopCart()
      try{
         const data=await $fetch('/api/logout',{
          method:'POST'
         })
         User.value=null;
         log();
         return navigateTo('/')
       
      }
      catch(error){
        console.log(error)
      }
   }

   function log(){
    Swal.fire({
            text: "شمااز حساب کاربری خود خارج شدید",
            icon: "success",
            background:'orange',
            iconColor:'white',
            color:'white',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top-right',
        });
   }
</script>
<style scoped>
  .centers{
    border: 1px solid  #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    padding-bottom: 1rem;
    padding-top: 1rem;
    box-shadow: 0 5px 15px gray;
    position:fixed;
    width: 100%;
    top:0;
    left: 0;
    z-index: 1;
  }
  .Links{
    display: flex;
  }
.link{
  margin-top:1.2rem;
  font-size:1.1rem;
  margin-left: 2.5rem;
 
}
.link a{
  padding: .7rem;
  font-weight: bold;
}

.photo{
  margin-left: 12rem;
}

.sell i{
  font-size: 22px;
}
.ICON{
  position: relative;
}
.count{
    position: absolute;
    background-color: red;
    color: white;
    width: 1.3rem;
    height: 1.3rem;
    padding: .1rem;
    border-radius:50% ;
    right: 2rem;
    top:-.6rem;
    text-align: center;
   }
</style>


