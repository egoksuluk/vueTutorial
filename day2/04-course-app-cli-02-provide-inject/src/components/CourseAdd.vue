<template>
      <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Kurs Adı" v-model="courseName"/>
          <button class="btn btn-outline-primary" type="button" @click="onSave">Ekle</button>
      </div>
</template>
<script lang="ts">

export default {
    data() {
        return{
            courseList : [
                { title : "Vue2",completed : false, id :1 },
                { title : "Vue3",completed : false, id :2 },
            ]
        };   
    },
    methods : {
        onSave(){
            const courseObject = {
                title : this.courseName, 
                completed : false , 
                id : new Date().getTime(),
            };
            this.courseName = null;
            this.$emit("course-add-event",courseObject);
        },
    }
}
</script>
