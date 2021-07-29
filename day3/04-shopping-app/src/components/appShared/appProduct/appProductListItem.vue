<template>
        <div class="mb-5 col-3">
          <div class="card" style="width: 18rem">
            <img :src="`https://picsum.photos/200?random=${item.id}`" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{item.productName}}</h5>
              <p class="card-text">{{item.descriptionArea}}</p>
              <div class="d-flex justify-content-between align-items-center">
                <button v-if="addToCartAvailable" @click="addNewItemToCart(item)" class="btn btn-primary">Sepete Ekle</button>
                <button v-else @click="removeItemFromCart(item)" class="btn btn-danger">Sepetten Çıkart</button>
                <h5 class="card-title text-right">{{ itemPrice }}</h5>
              </div>
            </div>
          </div>
        </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
    props : ["item"],
    methods : {
        ...mapMutations(["addNewItemToCart","removeItemFromCart"]),
    },
    computed : {
        itemPrice(){
            return `${parseFloat(this.item.price).toFixed(2)}₺`
        },
        addToCartAvailable(){
            return this.$route.name === "Home";
        }
    }
}
</script>