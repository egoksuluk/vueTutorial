const app = Vue.createApp({
    data(){
        return {
            boxClasses : "border red",
            counter : 0,
            borderClass : false,
            redClass : false, 
            greenClass : false, 
            blueClass : false,
            bgClass : " " ,
        };
    },
    computed :{
        _boxClasses(){
            return{
                border : this.borderClass, 
                red :  this.redClass, 
                green : this.greenClass, 
                blue : this.blueClass
            };
        },
        boxClasses(){
            return{
                border : this.borderClass, 
                red :  this.bgClass === "red", 
                green : this.bgClass === "green", 
                blue : this.bgClass  === "blue", 
            };
        }
    }
}).mount("#app");