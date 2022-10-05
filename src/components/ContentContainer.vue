<template>
    <section class="main container row g-0">
      <ProductGallery></ProductGallery>

      <ProductDescription></ProductDescription>
    </section>
</template>

<script>
  import ProductGallery from './ProductGallery.vue';
  import ProductDescription from './ProductDescription.vue'
  
  export default {
    components: {
      ProductGallery,
      ProductDescription
    },
    methods: {
    },
    mounted () {
      
    }
  }
</script>
