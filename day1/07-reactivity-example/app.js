const app = Vue.createApp({
    data(){
        return {
            item : null,
            filterText : "",
            itemList : [],
        };
    },
    methods : {
       /*  getItemList() {
            return this.itemList.filter((i)=>i.includes(this.filterText));
        } */
    },
    computed:{
       getItemList() {
            return this.itemList.filter((i)=>i.includes(this.filterText));
        },
       itemCount(){
           return `${this.getItemList.length} adet kayıt vardır..` ;
       }
    },
    watch:{
     
    },
}).mount("#app");