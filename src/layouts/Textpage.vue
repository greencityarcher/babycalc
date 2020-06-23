
<template>
  <div>
    <Header :pagetitle="pagename" :subtitle="subtitle">

    </Header>
    <div class="container">
      <slot></slot>
    </div>
    <Sharebar></Sharebar>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Sharebar from '../components/Sharebar.vue'
export default {
  components: {
    Header,
    Sharebar,
    Footer
  },
  props: ['pagename', 'subtitle']
}
</script>
