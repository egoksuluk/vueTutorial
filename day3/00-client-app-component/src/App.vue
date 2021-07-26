<template>
  <div>
    <appHeader />
        <!-- ########## FORM ###########-->
      <FormSectionIndex :onSave="onSave"/>

      <!-- ########## LIST ###########-->
       <ListSectionIndex :clientList="clientList" :deleteItem="deleteItem"/>
  </div>
</template>

<script>
import axios from "axios";
import ListSectionIndex from "@/components/ListSection/Index";
import FormSectionIndex from "@/components/FormSection/Index";
export default {
  components : {
    ListSectionIndex,
    FormSectionIndex
  },
  data(){
    return{
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
    onSave(userData){
      console.log(userData);
      axios.post("http://localhost:3000/customers",{ userData }).then(save_response => {
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
