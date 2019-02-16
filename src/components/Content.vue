<template>
  <div class="hello">
    <h1></h1>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        capsules: null
      }
    },
    watch: {
      '$route'(to, from) {
        console.log(to.params)
        const id = this.$route.params.capsuleId
        console.log(id)
        this.capsules = this.$store.state.capsules.filter(c => c.id == id)
      }
    },
    created() {
      console.log(this.$route.params)
      console.log("created")
    },
    computed: {
      
    }
  }
</script>

<style scoped>

</style>