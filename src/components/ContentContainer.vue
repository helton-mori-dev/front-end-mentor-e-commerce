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
          <div class="counter-wrapper">
            <button class="counter-button decrease">
              <img src="images/icon-minus.svg" alt="" class="minus">
            </button>
            <p class="amount">
              0
            </p>
            <button class="counter-button increase">
              <img src="images/icon-plus.svg" alt="" class="plus">
            </button>
          </div>
          <button class="btn btn-dark add-to-cart">
            <img src="images/icon-cart.svg" alt="">
            Add to cart
          </button>
        </div>
      </div>
    </section>
</template>

<style scoped>
  .add-to-cart img {
    filter: invert(1);
    mix-blend-mode: plus-lighter;
    margin-right: .5rem;
  }
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
    margin-bottom: 2rem;
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
    margin-bottom: 2rem;
  }

  .qty-wrapper {
    display: grid;
    grid-template-columns: 3fr 5fr;
    gap: 20px;
  }
  
  .counter-wrapper {
    display: flex;
    justify-content: space-around;
    border-radius: 8px;
    background-color: #f7f8fd;
  }

  .counter-button {
    border: none;
    background-color: transparent;
  }

  .counter-button:hover {
    opacity: .6;
  }
  
  .amount {
    font-size: 1.5rem;
    font-weight: 700;
    padding: 1rem 0;
    margin: 0;
  }

  .add-to-cart {
    background-color: #f2812c;
    color: #fff;
    font-weight: 700;
    border: none;
    border-radius: 12px;
    font-size: 1.3rem;
    letter-spacing: 2px;
  }

</style>

<script>
  import ProductGallery from './ProductGallery.vue';
  export default {
    // data () {

    // },
    components: {
      ProductGallery
    },
    methods: {
    },
    mounted () {
      
    }
  }
</script>
