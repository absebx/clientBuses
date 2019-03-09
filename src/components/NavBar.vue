<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo center">{{title}}</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navBar',
  data: ()=>{
    return {
      title: 'AppBuses'
    }
  }
  
  
}
</script>