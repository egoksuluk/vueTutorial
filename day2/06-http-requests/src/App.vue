<template>
  <div>
    <h2 class="mt-3 text-center">Client App</h2>
    <hr />
    <div class="row mt-5">
      <!-- ########## FORM ###########-->
      <div class="col-6 offset-3 border p-2">
        <div class="mb-3">
          <label for="clientName" class="form-label">Müşteri Adı ve Soyadı</label>
          <input v-model="userData.clientName" type="text" class="form-control" id="clientName" placeholder="müşteri adı...">
        </div>
        <div class="mb-3">
        <label for="phone" class="form-label">Telefon</label>
        <input v-model="userData.phone"  type="text" class="form-control" id="phone" placeholder="telefon numarası...">
        </div>
        <div class="mb-3">
          <label for="emailAddress" class="form-label">Email Adresi</label>
          <input v-model="userData.email"  type="email" class="form-control" id="emailAddress" placeholder="name@example.com">
        </div>
        <div class="mb-3">
          <label for="clientType" class="form-label">Müşteri Tipi</label>
          <select v-model="userData.clientType"  class="form-select" id="clientType" aria-label="Müşteri Tipi">
          <option value="supplier">Satıcı</option>
          <option value="customer">Müşteri</option>
          <option value="both">İkisi Birden</option>
        </select>
        </div>
        <div class="mb-3">
          <label for="descrArea" class="form-label">Açıklama</label>
          <textarea v-model="userData.description"  class="form-control" id="descrArea" rows="3"></textarea>
        </div>
        <div class="d-flex justify-content-end align-items-center">
          <button class=" btn btn-sm btn-secondary me-1">İptal</button>
          <button class=" btn btn-sm btn-primary" @click="onSave">Kaydet</button>
        </div>    
      </div>

      <!-- ########## LIST ###########-->
       <div class="row mt-5">
      <!-- ########## FORM ###########-->
        <div class="col-6 offset-3 border p-2">
            <table class="table table-hover">
               <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Ad-Soyad</th>
                  <th scope="col">Telefon</th>
                  <th scope="col">E-Mail</th>
                  <th scope="col">Müşteri Tipi</th>
                  <th scope="col">Açıklama</th>
                  <th scope="col">Sil</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for=" clientItem in clientList " :key="clientItem.id">
                  <th scope="row">{{ clientItem.id }}</th>
                  <td>{{ clientItem.clientName }}</td>
                  <td>{{ clientItem.phone }}</td>
                  <td>{{ clientItem.email }}</td>
                  <td>{{ clientItem.clientType }}</td>
                  <td>{{ clientItem.description }}</td>
                  <td>
                    <button class="btn btn-sm btn-danger" @click="deleteItem(clientItem)">Sil</button>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      userData : {
        clientName : null,
        phone : null,
        email : null, 
        clientType : null, 
        description : null,
      },
      clientList : [],
    };
  },
  mounted () {
    axios.get("http://localhost:3000/customers").then(list_response =>{
      console.log(list_response);
      this.clientList = list_response.data;
    });
  },
  methods : {
    onSave(){
      axios.post("http://localhost:3000/customers",{ ...this.userData }).then(save_response => {
        console.log(save_response);
          this.clientList.push(save_response.data);
      })
    },
    deleteItem(item){
       axios.delete(`http://localhost:3000/customers/${item.id}`).then(delete_response => {
        this.clientList = this.clientList.filter(c => c.id !== item.id);
        console.log(delete_response);
      })
    },
  },
};
</script>
