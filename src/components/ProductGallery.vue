<template>
    <div class="col-sm-12 col-md-6 gallery p-sm-0 p-md-5">
        <div class="product__gallery"
            v-for="slide in slides" 
            :key="slide"
        >
            <div class="product__slider">
                <img 
                    class="product__image img-fluid" 
                    :src="slide.src" 
                    alt=""
                    @click="slideshow()"
                >
            </div>
        </div>
        
        <div class="thumbnails d-md-flex d-none">          
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

        <Transition name="layer">
            <div 
                class="slider__container row"
                v-if="showLightBox"
                @click.stop="slideshow()"
            >
                <div 
                    class="slider__lightbox col-4 mx-auto"
                    v-for="slide in slides" 
                    :key="slide"
                >
                    <div 
                        class="slider__close"
                        @click.stop="slideHide()"
                    >
                        <img src="images/icon-close.svg" alt="" class="close__icon">
                    </div>
                    <div class="product__slider">
                        <img 
                            class="product__image__lightbox img-fluid" 
                            :src="slide.src" 
                        >
                    </div>
                    <div class="thumbnails col-10 mx-auto">          
                    <div 
                        class="thumb product__slider"
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

                <div 
                    class="back-menu-layer"
                    v-if="showLightBox"
                ></div>
            </div>
        </Transition>
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
                this.showLightBox = true
            },
            slideHide () {
                this.showLightBox = false
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

    .slider__container {
        position: fixed;
        inset: 0;
        z-index: 4;
    }

    .slider__lightbox {
        position: absolute;
        top: 25%;
        left: 50%;
        translate: -50%;
        z-index: 4;
    }

    .slider__close {
        position: absolute;
        right: 0;
        top: -30px;
        cursor: pointer;
    }
    .back-menu-layer {
        position: fixed;
        inset: 0;
        opacity: .6;
        background-color: #333;
        z-index: 3;
    }

    .layer-enter-active, .layer-leave-active {
        transition: .3s all ease;
    }

    .layer-enter-from, .layer-leave-to {
        opacity: 0;
    }

    @media (max-width: 576px) {
        .product__image {
            border-radius: 0;
        }
    }
</style>