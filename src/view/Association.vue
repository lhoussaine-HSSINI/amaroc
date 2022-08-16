<template>
  <Navbar></Navbar>


  <footer class="footer-section">
    <Footer></Footer>
  </footer>
</template>



<script>
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: `Association`,
    components: {
      Navbar,
      Footer,

  },
}
</script>

<style scoped>

</style>