<template>
    <section class="main container row g-0">
      <ProductGallery></ProductGallery>

      <div class="col-6 description p-5">

        <h2 class="company-title pt-5 pb-2">
          Sneaker Company
        </h2>
        <h3 class="product-title pb-3">
          Fall Limited Edition Sneakers
        </h3>

        <p class="product-description">
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
        they’ll withstand everything the weather can offer.
        </p>

        <div class="price-discount">
          <p class="main-price">
            $125.00
          </p>
          <p class="discount">
            50%
          </p>
        </div>

        <p class="old-price">
          $250.00
        </p>

        <div class="qty-wrapper">
          <p class="amount">
            0
          </p>
          <button class="add-to-cart">
            Add to cart
          </button>
        </div>
      </div>
    </section>
</template>

<style scoped>
  .company-title {
    color: #f2812c;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 2px;
  }

  .product-title {
    font-weight: 700;
    font-size: 3rem;
  }

  .product-description {
    color: #666;
    font-size: 1.1rem;
  }

  .price-discount {
    display: flex;    
    justify-content: flex-start;
    line-height: 1;
  }

  .main-price {
    font-weight: 700;
    font-size: 2rem;
    margin-right: 1rem;
  }

  .discount {
    color: #f2812c;
    background-color: #ffeddc;
    line-height: 1rem;
    border-radius: 10px;
    padding: 7px;
    font-weight: 700;
    font-size: 1.3rem;
    margin-top: 2px;
  }

  .old-price {
    text-decoration: line-through;
    font-weight: 700;
    color: #ccc;
    font-size: 1.1rem;
    width: 100%;
  }

  .qty-wrapper {

  }

  .amount {

  }

  .add-to-cart {

  }

</style>

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
