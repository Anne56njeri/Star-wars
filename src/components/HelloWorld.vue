<template>
  <div>
    <ul v-for="(value ,key) in characters " @click="show(value)">
      <li> {{value.name}}</li>

      </ul>
    </div>
 
</template>

<script>
import Router from "../router";
export default {
  name: "HelloWorld",
 
  computed:{
    // we access the characters from store 
   characters(){
     return this.$store.state.characters;
   }
  },

  created(){
    this.$store.dispatch('getCharactresList')
  },
  methods: {
    show(value){
      this.store.commit('setSelectedCharacter',character);
      this.$router.push("")
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
