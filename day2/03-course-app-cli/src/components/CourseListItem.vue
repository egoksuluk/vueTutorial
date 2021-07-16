<template>
  <!-- <li v-for="courseItem in courseList" :key="courseItem.id" :class= "{ 'completed-item' : courseItem.completed , 'uncompleted-item' : !courseItem.completed }" class="list-group-item d-flex justify-content-between align-items-center"> -->
  <li class="list-group-item d-flex justify-content-between align-items-center" :class= "completeClass">
    <span>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          :id="`complete_${courseItem.id}`"
          v-model = "courseItem.completed"
        />
        <label class="form-check-label" :for="`complete_${courseItem.id}`">
             {{ courseItem.title }}
        </label>
      </div>
    </span>
    <button class="btn btn-sm btn-danger" @click="deleteItem">
      Sil
    </button>
  </li>
</template>
<script>
export default {
    props : ["item"],
    data(){
        return {
            courseItem  : {}
        };
    },
    mounted(){
        this.courseItem = this.item;
    },
    methods : {
        deleteItem(){
            this.$emit("delete-event" , this.courseItem);
        },
    },
    computed: {
        completeClass() {
            return {
                "completed-item" : this.courseItem.completed , 
                "uncompleted-item": !this.courseItem.completed
            };
        }
    },
}
</script>
<style>
    .uncompleted-item{
            background-color: #fc838f40;
        }
        .completed-item{
            background-color: #1987534b;
        }
</style>