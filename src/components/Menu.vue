<template>
   <div>
      <div class="card" v-for="capsule in capsules" :key="capsule.id">
         <router-link :to="'/capsules/' + capsule.id">
            {{ capsule.name }}
         </router-link>
      </div>
      
   </div>
</template>

<script>
   export default {
      computed: {
         capsules(){
            return this.$store.state.capsules
         }
      }
   }
</script>

<style scoped>
.card {
   margin: 20px;
   padding: 20px;
}
</style>