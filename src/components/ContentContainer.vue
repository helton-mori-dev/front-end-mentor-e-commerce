<template>
    <section class="main container row g-0">
      <div class="col-6 gallery p-5">

        <div class="product__gallery"
          v-for="slide of slides" :key="slide">
          <div class="">
            <img class="product__image" :src="slide.src" alt="">
          </div>
        </div>
          
        <div class="row thumbnails">
          <div class="column thumb">
            <img src="" alt="" class="img__thumb">
          </div>
        </div>
      </div>

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
    export default {
      data () {
        return {
          slides: [
            { src: 'images/image-product-1.jpg' },
            { src: 'images/image-product-2.jpg' },
            { src: 'images/image-product-3.jpg' },
            { src: 'images/image-product-4.jpg' }
          ]
        }
      }
    }
</script>

<style scoped>
.product__image {
    /* display: none; */
    width: 100%;
    border-radius: 16px;
}

.description {
    display: flex;
    justify-content: center;
    flex-direction: column;
}
</style>