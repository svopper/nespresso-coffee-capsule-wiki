<template>
   <div class="menu">
      <div class="card" v-for="capsule in capsules" :key="capsule.id">
         <router-link class="name" :to="'/capsules/' + capsule.id">
            {{ capsule.name }}
         </router-link>
         <span class="sub_title">{{ capsule.short_description }}</span>
         <div style="width: 64px; height: 64px;">
            <img class="thumbnail" :src="'https://kols.dk/img/nespresso_assets/' + capsule.image_path.thumbnail" alt="">
         </div>
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

.thumbnail {
   width: inherit;
}

.name {
   font-size: 30px;
}

.menu {
   max-height: 80vh;
   overflow: scroll;
}

.sub_title {
   margin-bottom: 20px;
}
</style>