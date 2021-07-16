<template>
     <div class="row mt-5">
            <div class="col-4 offset-4 border p-3">
                <course-add @course-add-event="newCourseItem = $event"/>

                <course-list :newCourseItem = "newCourseItem"/>

            </div>      
        </div>
</template>

<script>
import CourseAdd from "@/components/CourseAdd";
import CourseList from "@/components/CourseList";
export default ({
    components : {
      CourseAdd,
      CourseList
    },
    data() {
        return{
            courseName : null, 
            newCourseItem : null,
            courseList : [{ title : "Vue", completed : false, id : 1 }],
        };
    },
    methods : {
        onSave(){
            this.courseList.push({
                title : this.courseName, 
                completed : false , 
                id : new Date().getTime(),
            });
            this.courseName = "";
        },
        
    },
})
</script>


