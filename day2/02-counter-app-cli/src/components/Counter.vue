<template>
        <div class="d-flex justify-content-center flex-column align-items-center">
            <h3>{{ counter }}</h3>
            <div>
                <button @click="counter++" class="btn btn-sm btn-success me-1">+</button>
                <button @click="counter--" class="btn btn-sm btn-danger">-</button>           
            </div>
        </div>
</template>

<script>

export default ({
    data() {
        return{
            counter : 0
        };
    },
    methods : {
        increase(){
            this.counter++;
        },
        decrease(){
            this.counter--;
        }
    }
})
</script>
