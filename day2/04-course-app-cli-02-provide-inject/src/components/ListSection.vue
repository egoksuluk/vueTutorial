<template>
  <div>
    <course-list v-if="courseList.length > 0" @delete-event = "$emit('delete-event',$event)"/>
    <alert v-else/>
    <count-box label="Tamamlanmış" :value="completedCount"/>
    <count-box label="Tamamlanmamış" :value="uncompletedCount"/>
    <count-box label="Toplam" :value="courseList.length"/>
  </div>
</template>
<script>
import CourseList from "@/components/CourseList";
import Alert from "@/components/Alert";
import CountBox from "@/components/CountBox";
export default {
  props : ["courseList"],
  components: {
    CourseList,
    Alert,
    CountBox
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
