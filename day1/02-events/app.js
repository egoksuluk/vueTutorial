const app = Vue.createApp({
    data(){
        return {
            coords:"0,0",
            todolist: [] ,
        };
    },
    methods : {
        showMeAlert(text,event){
            console.log("event: " + event);
            alert(text || 'Default');
        },
        updateCoords(event){
            console.log(event.clientX, event.clientY);
            this.coords  = `${event.clientX},${event.clientY}`;
        },
        writeMessage(event){
            console.log(event.target.value);
            this.todolist.push(event.target.value);
            event.target.value = "";
        },
    },
});

app.mount("#app");