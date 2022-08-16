<template>
  <RouterView/>
</template>

<script>

import axios from 'axios'
export default {
  name: `App`,

  beforeCreate() {
    this.$store.commit('initializeStore')
    const token=this.$store.state.user.token
    const id=this.$store.state.user.id
    console.log(token)
    console.log(id)
    if (token) {
      axios.defaults.headers.common['Authorization']="Token "+token
    }else{
      axios.defaults.headers.common['Authorization']=""
    }
  }
}
</script>

<style>
</style>
