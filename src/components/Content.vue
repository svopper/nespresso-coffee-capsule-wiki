<template>
  <div class="card">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>{{capsule.name}}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p>{{capsule.description}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <h3>Cups</h3>
          <div v-for="cup in capsule.cups" :key="cup">
            <span>{{cup.type}} </span>
            <span>{{cup.amount}} ml</span>
          </div>
        </div>
        <div class="col-6">
          <h3>Intensity</h3>
          <span>{{capsule.intensity}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        capsule: null
      }
    },
    watch: {
      '$route'(to, from) {
        console.log(to.params)
        const id = this.$route.params.capsuleId
        console.log(id)
        this.capsule = this.$store.state.capsules.filter(c => c.id == id)[0]
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
  .card {
    padding: 40px;
  }

  h1 {
    margin-bottom: 30px;
    font-size: 50px;
  }
</style>