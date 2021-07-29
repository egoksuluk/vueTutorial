<template>
    <div class="container">
      <div class="row mt-5">
        <div class="col-6 offset-3 p-0 card">
          <div class="card-header">Ürün Listesi</div>
          <div class="card-body">
              <div class="d-flex justify-content-end">
                <router-link class="btn btn-sm mb-2 btn-primary" to="/new-product">Yeni Ürün Ekle</router-link>
              </div>
            <table v-if="productList.length > 0 " class="table table-hover table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Ürün Adı</th>
                  <th scope="col">Kategori</th>
                  <th scope="col">Fiyat</th>
                  <th scope="col">Açıklama</th>
                  <th scope="col">Sil</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in productList" :key="item.id">
                  <th scope="row">{{ item.id }}</th>
                  <td>{{ item.productName }}</td>
                  <td>{{ item.productCategory }}</td>
                  <td>{{ item.price }}</td>
                  <td>{{ item.descriptionArea }}</td>
                  <td>
                    <button @click="deleteItem(item)" class="btn btn-sm btn-danger">Sil</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div v-else class="alert alert-warning">
                Herhangi eklenmiş bir kayıt bulunmamaktadır. 
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
          productList : [],
        };
    },
    mounted(){
        this.fetchProducts()
    },
    methods : {
        fetchProducts(){
            this.$axios.get("http://localhost:3000/products").then(product_response => {
                console.log(product_response);
                this.productList = product_response.data || [];
            });
        },
        deleteItem(item){
            this.$axios.delete(`http://localhost:3000/products/${item.id}`).then(delete_response => {
                if(delete_response.status === 200){
                   // this.fetchProducts();
                   this.productList = this.productList.filter(p => p.id !==item.id);
                }
            });
        }
    }
}
</script>