<template>
    <main-layout pagename="title" subtitle="empty">
      <Calculator></Calculator>
    </main-layout>
  </template>

  <script>
    import MainLayout from '../layouts/Main.vue'
    import Calculator from '../components/Calculator.vue'
    export default {
      components: {
        MainLayout,
        Calculator
      },
    }
  </script>
