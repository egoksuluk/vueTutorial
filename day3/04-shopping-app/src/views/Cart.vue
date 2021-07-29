<template>
    <app-product-list :itemList="productList"/>
</template>
<script>
import { mapGetters } from "vuex";
import appProductList from "@/components/appShared/appProduct/appProductList";
export default {
    components : {
        appProductList
    },
    computed : {
        ...mapGetters({
            productList : "_userCart",
        })
    }
}
</script>