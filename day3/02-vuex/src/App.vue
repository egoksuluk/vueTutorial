<template>
    <div class="container">
      <h3 class="text-center">Vuex</h3>
      <ul class="list-group">
        <li v-for="(item,ind) in $store.state.productList" :key="item" class="list-group-item">
            <strong>#{{ind }} </strong> - {{item}}
        </li>
      </ul>

      {{$store.state.theme}}
      {{ _currentUser }}
      {{ _activeTheme }}

      <br/>

      <input type="text" class="form-control" v-model="activeTheme">
      <button @click="setTheme(activeTheme)" class="mt-1 btn btn-sm btn-danger">Set Theme</button>

      <br/>
      <button @click="setUser({name : 'Poyraz', lname : 'Koruk'})" class="mt-1 btn btn-sm btn-primary">Set User</button>
      <button @click="setMyuser" class="mt-1 btn btn-sm btn-success">Set My User</button>
    </div>
</template>
<script>
import { mapActions, mapGetters , mapMutations } from "vuex";
export default {
  mounted(){
    console.log(this.$store);
    console.log(this.$store.getters._currentUser);
  },
  data() {
    return {
      activeTheme : null ,
    }
  },
  methods : {
    ...mapMutations(["setTheme",]),
    ...mapActions(["setUser"]),
    setMyuser(){
      this.$store.dispatch("setUser",{name : "Büşra",lname:"Göksülük"})
    }
    /* setTheme(){
        //this.$store.state.theme = this.activeTheme;
        this.$store.commit("setTheme",this.activeTheme);
    } */
  },
  computed : {
    ...mapGetters(["_currentUser","_activeTheme"]),
  },
}
</script>