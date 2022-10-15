<template>
  
  <div class="container g-0">
    <MainHeader></MainHeader>
    <ContentContainer></ContentContainer>   
    <MainFooter></MainFooter> 
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import ContentContainer from './components/ContentContainer.vue';
import MainFooter from './components/MainFooter.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    ContentContainer,
    MainFooter
  }
}
</script>

<style>
:root {
  --orange: #f2812c;
}

@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;500;600;700');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Kumbh Sans', sans-serif;
}

.attribution {
  font-size: 11px;
  text-align: center;
}

.attribution a {
  color: hsl(228, 45%, 44%);
}

@media (max-width: 769px) {
  .attribution {
    margin-top: 2rem;
  }
}

</style>
