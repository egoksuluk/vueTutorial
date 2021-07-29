<template>
    <div>
        <div class="container">
            <app-product-list :itemList="productList"/>
        </div>
    </div>
</template>
<script>
import appProductList from "@/components/appShared/appProduct/appProductList";
import mapGetters from "vuex";
export default {
    components : {
        appProductList
    },
    data(){
        return {
          productList : [],
        };
    },
    mounted(){
        this.$axios.get("http://localhost:3000/products").then(product_response => {
                console.log(product_response);
                this.productList = product_response.data || [];
        });
    },
    computed : {
        ... mapGetters(["_userCart"]),
        filteredProductList(){
            return this.productList.filter(p => !this._userCart.find(uc => uc.id === p.id));
        }
    }
};
</script>