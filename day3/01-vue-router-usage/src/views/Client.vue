<template>
    <div v-if="clientLoaded">
        <h3>{{client.clientName}}</h3>
        <p>{{client.phone}}</p>
        <p>{{client.email}}</p>
        <p>{{client.description}}</p>
        <input type="checkbox" v-model="confirm" /> Kullanıcı onaylansın mı ?
    </div>
    <!-- <pre>{{this.$route.search}}</pre> -->
</template>
<script>
import axios from "axios";
export default {
    data(){
        return{
            client : null,
            confirm : false,
            user_permission : false,
            //client : {}
            //clientLoaded : false 
        };
    },
    mounted(){
        this.fetchClient();
        /* axios.get(`http://localhost:3000/customers/${this.$route.params.clientId}`).then(client_response => {
                        console.log("client_response :>>", client_response);
                        this.client = client_response.data;
        }); */
    },
    methods : {
        fetchClient(){
            axios.get(`http://localhost:3000/customers/${this.$route.params.clientId}`).then(client_response => {
                        console.log("client_response :>>", client_response);
                        this.client = client_response.data;
            }).catch(() => {
                this.$router.go(-1);
            });
        }
    },
    computed : {
        clientLoaded(){
            return this.client !== null;
        }
    },
    beforeCreate(){
        console.log("beforeCreate");
    },
    created(){
        console.log("created");
    },
    beforeRouteUpdate(){
        console.log("beforeRouteUpdate");
        this.fetchClient();
    },
    beforeRouteEnter(to,from,next){
        //console.log(to,from);
        console.log("beforeRouteEnter");
        next(vm =>{
            console.log(vm.user_permission);
            if(vm.user_permission){
                return true;
            }else{
                return false;
            }
        });
    },
    beforeRouteLeave(to,from,next){
        console.log("beforeRouteLeave");
        console.log(to,from);
        if(this.confirm){
            next(true);
        }else{
            alert("Kullanıcı onayını vermelisiniz!!");
            next(false);
        }
    },
};
</script>