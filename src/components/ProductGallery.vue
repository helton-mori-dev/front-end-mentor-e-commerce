<template>
    <div class="col-6 gallery p-5">
        <div class="product__gallery"
            v-for="slide in slides" 
            :key="slide"
        >
            <div class="product__slider">
                <img 
                    class="product__image" 
                    :src="slide.src" 
                    alt=""
                    @click="slideshow()"
                >
            </div>
        </div>
        
        <div class="thumbnails">          
            <div 
                class="thumb"
                v-for="(thumb, index) in thumbs" :key="thumb"
            >
                <img 
                    class="img__thumb" 
                    :src="thumb.src" 
                    alt=""
                    @click="showImages(index)"
                >
            </div>
        </div>

        <div 
            class="slider-container"
            v-if="showLightBox"
        >
            <div 
                class="slider-lightbox"
                v-for="slide in slides" 
                :key="slide"
            >
                <div class="product__slider">
                    <img 
                        class="product__image" 
                        :src="slide.src" 
                    >
                </div>
            </div>
            <div class="thumbnails">          
                <div 
                    class="thumb"
                    v-for="(thumb, index) in thumbs" :key="thumb"
                >
                    <img 
                        class="img__thumb" 
                        :src="thumb.src" 
                        alt=""
                        @click="showImages(index)"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                showLightBox: false,
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
            let imageIndex = n
            let images = document.querySelectorAll(".product__image")
            let thumbs = document.querySelectorAll(".img__thumb")
            
            for (i = 0; i < images.length; i++) {
                images[i].style.display = "none"
            }
            for (i = 0; i < thumbs.length; i++) {
                thumbs[i].className = thumbs[i].className.replace(" active", "")
            }
            images[imageIndex].style.display = "block"
            thumbs[imageIndex].className += " active"
            },
            slideshow () {
                console.log('slide')
                this.showLightBox = !this.showLightBox

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
    
    .description {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    
    .active {
      opacity: 1;
    }
    
    .thumbnails {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 32px;
    }
    
    .thumb {
      width: 20%;
      cursor: pointer;
      transition: .3s all ease;
    }
    
    .thumb:hover {
      opacity: .7;
    }
    
    .img__thumb {
      width: 100%;
      border-radius: 8px;
    }
    
    .img__thumb.active {
      border: 3px solid #f2812c;
      opacity: .6;
    }
    </style>