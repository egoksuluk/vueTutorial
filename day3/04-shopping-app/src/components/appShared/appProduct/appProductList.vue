<template>
      <div class="row mt-5">
          <list-item v-for="item in itemList" :key="item.id" :item="item"/>
      </div>
</template>
<script>
import ListItem from "./appProductListItem";
export default {
    props : {
        itemList : {
            type : Array , 
            required : true , 
            default : () => [],
        }
    },
    components : {
        ListItem
    }
};
</script>