<template>
  <div>
    <ul class="list-group" v-if="courseList.length > 0">
      <course-list-item :item="courseItem" v-for="courseItem in courseList" :key="courseItem.id" @delete-event = "deleteItem"/>
    </ul>
    <alert />
    <count-box label="Tamamlanmış" :value="completedCount"/>
    <count-box label="Tamamlanmamış" :value="uncompletedCount"/>
    <count-box label="Toplam" :value="courseList.length"/>
  </div>
</template>
<script>
import CourseListItem from "@/components/CourseListItem";
import Alert from "@/components/Alert";
import CountBox from "@/components/CountBox";
export default {
    props : ["newCourseItem"],
  components: {
    CourseListItem,
    Alert,
    CountBox
  },
  data() {
    return {
      courseList: [{ title: "Vue", completed: false, id: 1 }],
    };
  },
  watch : {
      newCourseItem(newValue){
         this.courseList.push(newValue);
      }
  },
  methods: {
    deleteItem(courseItem){
      console.log(this.courseItem);
      this.courseList = this.courseList.filter((c)=> c !== courseItem);
   },
  },
  computed: {
    completedCount() {
      return this.courseList.filter((c) => c.completed).length;
    },
    uncompletedCount() {
      return this.courseList.filter((c) => !c.completed).length;
    },
  },
};
</script>
