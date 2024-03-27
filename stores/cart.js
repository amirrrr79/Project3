import Swal from 'sweetalert2'
import { defineStore } from 'pinia'

//function updateLocalStorage(cart) {
   // localStorage.setItem('product', JSON.stringify(cart))
//}

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
              cart:[]
          }
  },
  getters:{
    ItemProcuct(state){
        return state.cart
    },
    count(state){
        return state.cart.length
    },
    total(state){
        return state.cart.reduce((pre,nex)=>{
            return pre + nex.cost*nex.quantity
        },0)
    }
  },
  actions: {
       AddDiscount(Discounts){
        const item = this.cart.find(p => p.id == Discounts.id)
        if (!item) {
            this.cart.push({
                ...Discounts,
                quantity: 1
            })
        } else {
            item.quantity++
        } 
         //updateLocalStorage(this.cart)
        Swal.fire({
            text: "محصول به سبد خرید شما اضافه شد",
            icon: "info",
            background:'orange',
            iconColor:'white',
            color:'white',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top-right',
        });
       },

       AddSell(Sells){
        const item = this.cart.find(p => p.id == Sells.id)
        if (!item) {
            this.cart.push({
                ...Sells,
                quantity: 1
            })
        } else {
            item.quantity++
        } 
       // updateLocalStorage(this.cart)
        Swal.fire({
            text: "محصول به سبد خرید شما اضافه شد",
            icon: "info",
            background:'orange',
            iconColor:'white',
            color:'white',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top-right',
        });
       },

       AddKabab(kababs){
        const item = this.cart.find(p => p.id == kababs.id)
        if (!item) {
            this.cart.push({
                ...kababs,
                quantity: 1
            })
        } else {
            item.quantity++
        } 
        //updateLocalStorage(this.cart)
        Swal.fire({
            text: "محصول به سبد خرید شما اضافه شد",
            icon: "info",
            background:'orange',
            iconColor:'white',
            color:'white',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top-right',
        });
       },

       AddPizza(pizzas){
        const item = this.cart.find(p => p.id == pizzas.id)
        if (!item) {
            this.cart.push({
                ...pizzas,
                quantity: 1
            })
        } else {
            item.quantity++
        } 
        //updateLocalStorage(this.cart)
        Swal.fire({
            text: "محصول به سبد خرید شما اضافه شد",
            icon: "info",
            background:'orange',
            iconColor:'white',
            color:'white',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top-right',
        });
       },

       AddBreakefast(breakes){
        const item = this.cart.find(p => p.id == breakes.id)
        if (!item) {
            this.cart.push({
                ...breakes,
                quantity: 1
            })
        } else {
            item.quantity++
        } 
       // updateLocalStorage(this.cart)
        Swal.fire({
            text: "محصول به سبد خرید شما اضافه شد",
            icon: "info",
            background:'orange',
            iconColor:'white',
            color:'white',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top-right',
        });
       },

       AddPasta(pastas){
        const item = this.cart.find(p => p.id == pastas.id)
        if (!item) {
            this.cart.push({
                ...pastas,
                quantity: 1
            })
        } else {
            item.quantity++
        } 
      //  updateLocalStorage(this.cart)
        Swal.fire({
            text: "محصول به سبد خرید شما اضافه شد",
            icon: "info",
            background:'orange',
            iconColor:'white',
            color:'white',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top-right',
        });
       },

       AddSalad(salads){
        const item = this.cart.find(p => p.id == salads.id)
        if (!item) {
            this.cart.push({
                ...salads,
                quantity: 1
            })
        } else {
            item.quantity++
        } 
       // updateLocalStorage(this.cart)
        Swal.fire({
            text: "محصول به سبد خرید شما اضافه شد",
            icon: "info",
            background:'orange',
            iconColor:'white',
            color:'white',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top-right',
        });
       },

       AddSandwich(sandwichs){
        const item = this.cart.find(p => p.id == sandwichs.id)
        if (!item) {
            this.cart.push({
                ...sandwichs,
                quantity: 1
            })
        } else {
            item.quantity++
        } 
      //  updateLocalStorage(this.cart)
        Swal.fire({
            text: "محصول به سبد خرید شما اضافه شد",
            icon: "info",
            background:'orange',
            iconColor:'white',
            color:'white',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top-right',
        });
       },

       AddSokhari(sokharis){
        const item = this.cart.find(p => p.id == sokharis.id)
        if (!item) {
            this.cart.push({
                ...sokharis,
                quantity: 1
            })
        } else {
            item.quantity++
        } 
      //  updateLocalStorage(this.cart)
        Swal.fire({
            text: "محصول به سبد خرید شما اضافه شد",
            icon: "info",
            background:'orange',
            iconColor:'white',
            color:'white',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top-right',
        });
       },

       AddSoop(soops){
        const item = this.cart.find(p => p.id == soops.id)
        if (!item) {
            this.cart.push({
                ...soops,
                quantity: 1
            })
        } else {
            item.quantity++
        } 
       // updateLocalStorage(this.cart)
        Swal.fire({
            text: "محصول به سبد خرید شما اضافه شد",
            icon: "info",
            background:'orange',
            iconColor:'white',
            color:'white',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top-right',
        });
       },

       PopCart(){
          this.cart=[]
       //   updateLocalStorage(this.cart)
       },

       increment(Products){
        const item = this.cart.find(p => p.id ==Products.id)
        if (item) {
           
            item.quantity++
        }
       },

        decrement(Products){
        const item = this.cart.find(p => p.id ==Products.id)
        if (item) {
            if(item.quantity>1){
                item.quantity--
            }
        }
      },
      remove(Products){
        this.cart=this.cart.filter(cart=> cart.id !=Products.id)
      },

      clear(){
        this.cart=[]
      },
      payment(){

            Swal.fire({
                 title: 'خرید شما با موفقیت انجام شد',
                 text:'از خرید شما سپاس گزاریم',
                 text: 'کد رهگیری خرید شما : 317541',
                 icon: 'success',
            });
        }

  },
})