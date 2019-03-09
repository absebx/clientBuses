<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="container">
      <Personas></Personas>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Personas from './components/Personas.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    Personas
  }
}
</script>

