const app = Vue.createApp({
    data(){
        return {
            counter : 0,
            counter2 : 0,
            message : ""
        };
    },
    methods : {},
    computed:{
        getCounterResult(){
            return this.counter <= 10 ? 'KÜÇÜK' : 'BÜYÜK';
        },
        getCounter2Result(){
            return this.counter2 <= 10 ? 'KÜÇÜK' : 'BÜYÜK';
        },
    },
    watch:{
        counter(newValue,oldValue){
            console.log ("New => Old : ",oldValue,newValue);
        },
        getCounterResult(newValue,oldValue){
            console.log ("New => Old : ",oldValue,newValue);
        }
    },
}).mount("#app");