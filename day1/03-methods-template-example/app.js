const app = Vue.createApp({
    data(){
        return {
            message : "Data üzerinden gelen mesaj...",
        };
    },
    methods : {
        getMessage(textValue){
            return this.formatter(textValue);
        },
        formatter(textValue){
            return `###-${textValue}-###`;
        },
    }
  
});

app.mount("#app");