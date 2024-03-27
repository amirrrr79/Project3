<template>
  <div v-if="Product.length!=0">
        <table class="table table-hover table-striped  border bg-white col-lg-12 pl-3 pt-3">
            <thead>
              <tr>
                <th>محصول</th>
                <th class="" style="width: 10%">قیمت</th>
                <th style="width: 10%">تعداد</th>
                <th>جمع</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="Products in Product" in :key="Products.id">
                <td class="align-middle">
                  <div class="row">
                    <div class="col-lg-2">
                      <img :src="Products.image" alt="..." class="img-fluid" />
                    </div>
                    <div class="col-lg-10">
                      <p>{{ Products.name }}</p>
                    </div>
                  </div>
                </td>
                <td class="align-middle">{{ Products.cost }}</td>
                <td class="align-middle">
                    <button
                  @click="increment(Products)"
                  class="btn btn-sm btn-danger ms-2"
                >
                  +
                </button>
                  <span>{{Products.quantity }}</span>
                  <button
                  @click="decrement(Products)"
                  class="btn btn-sm btn-danger me-2"
                >
                  -
                </button>
                 
                </td>
                <td class="align-middle">{{ Products.cost * Products.quantity }}</td>
                <td class="align-middle" style="width: 15%">
                    <button
                      @click="removeFromCart(Products)"
                      class="btn btn-danger btn-sm">
                        حذف
                </button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <a href="#" class="btn btn-success btn-block" @click="End()">پرداخت</a>
                </td>
                <td colspan="2" class="hidden-xs"></td>
                <td class="hidden-xs text-center" style="width: 15%">
                  <strong>قیمت نهایی:{{ Total }}</strong>
                </td>
                <td>
                    <button @click="clear()" class="btn btn-danger">
                      حذف همه
                   </button>
                </td>
              </tr>
            </tfoot>
          </table>
  </div>
  <div v-else style="text-align: center;margin-top: 20rem;margin-bottom:10rem;">
    <i class="bi bi-basket2 size"></i>
      <h5 class="text">سبد خرید خالی است</h5>
  </div>
</template>

<script setup>
import {useCartStore} from '../stores/cart'
const cart=useCartStore();

const Product=computed(()=> cart.ItemProcuct)
const Total=computed(()=> cart.total)

function increment(Products){
  cart.increment(Products)
}

function decrement(Products){
  cart.decrement(Products)
}

function removeFromCart(Products){
  cart.remove(Products)
}

function clear(){
  cart.clear()
}

function End(){
  cart.payment()
}

    
</script>

<style scoped>
.table{
  margin-top: 20rem;
  margin-bottom: 10rem;
  width: 90%;
  margin-right: 4rem;
}

.size{
  font-size: 8rem;
  color:red
}
</style>