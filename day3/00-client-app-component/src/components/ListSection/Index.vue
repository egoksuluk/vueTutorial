<template>
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
                  <td>{{ clientItem.userData.clientName }}</td>
                  <td>{{ clientItem.userData.phone }}</td>
                  <td>{{ clientItem.userData.email }}</td>
                  <td>{{ clientItem.userData.lientType }}</td>
                  <td>{{ clientItem.userData.description }}</td>
                  <td>
                    <button class="btn btn-sm btn-danger" @click="deleteItem(clientItem)">Sil</button>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
</template>
<script>
export default {
    props : ["clientList","deleteItem"],
}
</script>