<template>
    <section class="main container row g-0">
      <div class="col-6 gallery p-5">

        <div class="product__gallery"
          v-for="slide in slides" :key="slide">
          <div class="">
            <img class="product__image" :src="slide.src" alt="">
          </div>
        </div>
          
        <div class="row thumbnails"
          v-for="thumb in thumbs" :key="thumb">
          <div class="column thumb">
            <img 
              class="img__thumb" 
              :src="thumb.src" 
              alt=""
              @click="showImages(index)"
            >
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
          ],
          thumbs: [
            { src: 'images/image-product-1-thumbnail.jpg'},
            { src: 'images/image-product-2-thumbnail.jpg'},
            { src: 'images/image-product-3-thumbnail.jpg'},
            { src: 'images/image-product-4-thumbnail.jpg'}
          ]
        }
      },
      methods: {
        showImages (n) {
          let i
          let imageIndex = 1
          let images = document.querySelectorAll(".product__image")
          let thumbs = document.querySelectorAll(".img__thumb")
          if (n > images.length) {
            imageIndex = 1
          }
          if (n < 1) {
            imageIndex = images.length
          }
          for (i = 0; i < images.length; i++) {
            images[i].style.display = "none"
          }
          for (i = 0; i < thumbs.length; i++) {
            thumbs[i].className = thumbs[i].className.replace(" active", "")
          }
          images[imageIndex - 1].style.display = "block"
          thumbs[imageIndex - 1].className += " active"
          
          console.log(n)
          console.log(imageIndex - 1)
          console.log(thumbs[imageIndex - 1])
        }
      },
      mounted () {
        this.showImages(0)
      }
    }
</script>

<style scoped>
.product__image {
    display: none;
    width: 100%;
    border-radius: 16px;
}

/* .product__image:first-child {
    display: block;
} */

.description {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.active {
  opacity: 1;
}
</style>