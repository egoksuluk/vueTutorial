const app = Vue.createApp({
    data(){
        return {
            counter :0,
        };
    },
    methods : {},
    beforeCreate(){
        console.log("BeforeCreate Çalıştı");
    },
    created(){
        console.log("created Çalıştı");
    },
    beforeMount(){
        console.log("beforeMount Çalıştı");
        setTimeout(()=>{
            this.counter++;
        },2000);
    },
    mounted(){
        console.log("mounted Çalıştı");
    },
    beforeUpdate(){
        console.log("beforeUpdate Çalıştı");
    },
    updated(){
        console.log("updated Çalıştı");
    },

}).mount("#app");