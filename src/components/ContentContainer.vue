<template>
    <section class="main container row g-0">
      <ProductGallery></ProductGallery>

      <div class="col-6 description px-5">

        <h2 class="company-title">
          Sneaker Company
        </h2>
        <h3 class="product-title">
          Fall Limited Edition Sneakers
        </h3>

        <p class="product-description">
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
        they’ll withstand everything the weather can offer.
        </p>

        <p class="main-price">
          $125.00
        </p>
        <p class="discount">
          50%
        </p>
        <p class="old-price">
          $250.00
        </p>

        <p class="amount">
          0
        </p>
        <button class="add-to-cart">
          Add to cart
        </button>
      </div>
    </section>
</template>

<script>
  import ProductGallery from './ProductGallery.vue';
  export default {
    data () {

    },
    components: {
      ProductGallery
    },
    methods: {
    },
    mounted () {
      
    }
  }
</script>
