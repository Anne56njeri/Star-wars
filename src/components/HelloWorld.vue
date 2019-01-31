<template>
  <div>
    <ul v-for="character in characters" :key="character.id" @click="show(character)">
      <li></li>
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
    this.$store.dispatch('getCharactersList')
  },
  methods: {
    show(character){
      this.store.commit('setSelectedCharacter',character);
      this.$router.push("")
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
