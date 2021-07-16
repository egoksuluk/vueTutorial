<template>
    <ul class="list-group">
      <course-list-item :item="courseItem" v-for="courseItem in provideData.courseList" :key="courseItem.id" @delete-event = "$emit('delete-event',$event)"/>
    </ul> 
</template>
<script>
import CourseListItem from "@/components/CourseListItem";
export default {
   //props : ["courseList"],
   inject :  ["provideData"],
   components: {
    CourseListItem
   },
}
</script>