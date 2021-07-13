const app = Vue.createApp({
 /*    data(){
        return {
          counter : 0 ,
        };
    }, */
});

app.component("counter-app" , {
    data(){
        return {
          counter : 0 ,
        };
    },
    methods :  {},
    computed : {},
    watch : {},
    template : `
        <div class="d-flex justify-content-center flex-column align-items-center">
            <h3>{{ counter }}</h3>
            <div>
                <button @click="counter++" class="btn btn-sm btn-success me-1">+</button>
                <button @click="counter--" class="btn btn-sm btn-danger">-</button>           
            </div>
        </div>
    `,
});

app.mount("#app");