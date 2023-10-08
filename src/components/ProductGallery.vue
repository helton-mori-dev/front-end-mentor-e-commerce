<template>
    <div class="col-sm-12 col-md-6 gallery p-sm-0 p-md-5">
        <div class="product__gallery">
            <span class="circle_arrow_previous"><img class="arrow__previous" @click="decrementImages()" src="images/icon-previous.svg" alt=""></span>
            <span class="circle_arrow_next"><img class="arrow__next" @click="incrementImages()" src="images/icon-next.svg" alt=""></span>
            <div 
                class="product__slider"
                v-for="slide in slides" 
                :key="slide"
            >
                <img 
                    class="product__image img-fluid" 
                    :src="slide.src" 
                    alt=""
                    @click="slideshow()"
                >
            </div>
        </div>
        
        <div class="thumbnails d-sm-flex d-none">          
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
                class="slider__container d-none d-sm-block"
                v-if="showLightBox"
                @click.stop="slideshow()"
            >
                <div class="slider__lightbox__container mx-auto">
                    <img 
                        @click.stop="slideHide()"
                        src="images/icon-close.svg" 
                        alt="" 
                        class="slider__close" 
                        height="30"
                    >  
                    <span class="circle_arrow_previous"><img class="arrow__previous" src="images/icon-previous.svg" alt="" @click="decrementLightboxImages()"></span>
                    <span class="circle_arrow_next"><img class="arrow__next" src="images/icon-next.svg" alt="" @click="incrementLightboxImages()"></span>
                    <div 
                        class="slider__lightbox mx-auto"
                        v-for="slide in slides" 
                        :key="slide"
                    >
        
                        <div class="product__slider">
                            <img 
                                class="product__image__lightbox img-fluid" 
                                :src="slide.src" 
                            >
                        </div>
                    </div>
                    <div class="thumbnails thumbnails__lightbox mx-auto">          
                        <div 
                            v-for="(thumb, index) in thumbs" 
                            :key="thumb"
                            class="thumb__lightbox"
                        >
                            <img 
                                class="img__thumb__lightbox" 
                                :src="thumb.src" 
                                alt=""
                                @click.stop="showImagesLightBox(index)"
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
                ],
                currentImage: 0,
                currentLightboxImage: 0,
            }
        },
        methods: {            
            showImages (n) {
            let i
            this.currentImage = n
            let images = document.querySelectorAll(".product__image")
            let thumbs = document.querySelectorAll(".img__thumb")
            
            for (i = 0; i < images.length; i++) {
                images[i].style.display = "none"
            }
            for (i = 0; i < thumbs.length; i++) {
                thumbs[i].className = thumbs[i].className.replace(" active", "")
            }
            images[this.currentImage].style.display = "block"
            thumbs[this.currentImage].className += " active"
            },
            slideshow () {
                this.showLightBox = true
            },
            slideHide () {
                this.showLightBox = false
            },
            incrementImages () {
                if(this.currentImage == 3) {
                    this.currentImage = 0
                } else {
                    this.currentImage++
                }
                this.showImages(this.currentImage)
            },
            decrementImages () {
                if(this.currentImage == 0) {
                    this.currentImage = 3
                } else {
                    this.currentImage--
                }
                this.showImages(this.currentImage)
            },
            incrementLightboxImages () {
                if(this.currentImage == 3) {
                    this.currentImage = 0
                } else {
                    this.currentImage++
                }
                this.showImagesLightBox(this.currentImage)
            },
            decrementLightboxImages () {
                if(this.currentImage == 0) {
                    this.currentImage = 3
                } else {
                    this.currentImage--
                }
                this.showImagesLightBox(this.currentImage)
            },
            showImagesLightBox (n) {
                let i
                this.currentLightboxImage = n
                let images = document.querySelectorAll(".product__image__lightbox")
                let thumbs = document.querySelectorAll(".img__thumb__lightbox")
                
                for (i = 0; i < images.length; i++) {
                    images[i].style.display = "none"
                }
                for (i = 0; i < thumbs.length; i++) {
                    thumbs[i].className = thumbs[i].className.replace(" active", "")
                }
                images[this.currentLightboxImage].style.display = "block"
                thumbs[this.currentLightboxImage].className += " active"
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

    .product__gallery {
        cursor: pointer;
        position: relative;
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
      align-items: flex-start;
      margin-top: 32px;
    }

    .thumbnails__lightbox {
        z-index: 5;
        width: 80%;
    }

    .thumb__lightbox {
        padding: 0 10px;
    }
    
    .thumb {
      width: 20%;
      cursor: pointer;
      transition: .3s all ease;
    }
    
    .thumb:hover {
      opacity: .7;
    }
    
    .img__thumb, .img__thumb__lightbox {
      width: 100%;
      border-radius: 8px;
      transition: .3s all ease;
    }

    .img__thumb__lightbox:hover {
        opacity: .7;
        transition: .3s all ease;
    }

    .product__slider {
        position: relative;
    }

    .slider__lightbox:nth-of-type(1) .product__slider img {
        display: block;
    }
    
    .img__thumb.active {
        box-shadow:  0 0 0 3px var(--orange);
        opacity: .6;
    }

    .img__thumb__lightbox.active {
      box-shadow:  0 0 0 3px var(--orange);
    }

    .slider__container {
        position: fixed;
        inset: 0;
        z-index: 4;
    }

    .slider__lightbox__container {
        position: relative;
        display: flex;
        flex-direction: column;
        max-width: 530px;
        padding-top: 100px;
    }

    .slider__lightbox {
        z-index: 4;
        max-width: 100%;
    }

    .slider__close {
        position: absolute;
        right: 0;
        top: 50px;
        cursor: pointer;
        z-index: 5;
        transition: .3s all ease;        
    }
    
    .slider__close:hover {
        filter: grayscale(100%) brightness(2);
    }
    .back-menu-layer {
        position: fixed;
        inset: 0;
        opacity: .6;
        background-color: #333;
        z-index: 3;
    }

    .product__image__lightbox {
        display: none;
        border-radius: 12px;
    }

    .layer-enter-active, .layer-leave-active {
        transition: .3s all ease;
    }

    .layer-enter-from, .layer-leave-to {
        opacity: 0;
    }

    img[class*="arrow__"]{
        display: none;
    }

    .slider__lightbox__container img[class*="arrow__"]{
        display: block;
        padding: 18px 22px;
        transition: .3s all ease;
    }

    span[class*="circle_arrow_"]{
        position: absolute;
        top: 50%;
        translate: 0 -50%;
        background-color: #fff;
        z-index: 5;
        border-radius: 100%;
        cursor: pointer;
        transition: .3s all ease;
    }

    img[class*="arrow__"]:hover {
        filter: brightness(0%);
    }
    .circle_arrow_previous {
        left: -5%;
    }
    .circle_arrow_next {
        right: -5%;
    }

    @media (max-width: 576px) {

        img[class*="arrow__"]{
            display: block;
            padding: 18px 22px;
            transition: .3s all ease;
        }
        .product__image {
            border-radius: 0;
        }
        .circle_arrow_previous {
        left: 5%;
        }
        .circle_arrow_next {
            right: 5%;
        }

    }
</style>