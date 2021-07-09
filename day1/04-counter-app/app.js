const app = Vue.createApp({
    data(){
        return {
            counter : 0,
            counter2 : 0,
            message : ""
        };
    },
    methods : {
        inc(){
            this.counter++;
        },
        dec(){
            this.counter--;
        },
        getCounterResult(counter){
            return counter <= 10 ? 'KÜÇÜK' : 'BÜYÜK';
        },
    }
}).mount("#app");