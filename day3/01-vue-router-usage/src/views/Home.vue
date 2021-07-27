<template>
    <div>
        <h1>HOME PAGE</h1>
        <button @click="aboutPage">About</button>
        <br />
        <input @keydown.enter="clientDetail" type="text" placeholder="clientID press [enter]">
    </div>
</template>
<script>
export default {
    methods : {
        aboutPage() {
            //this.$router.push("/about");
            this.$router.push({name : "About"});
        },
        clientDetail(event){
            this.$router.push({name : "Client", params: { clientId : event.target.value } } );
            console.log(event.target.value);
        }
    },
}
</script>