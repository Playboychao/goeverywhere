<template>
    <div class="container">
        <div class="wrapper">
            <swiper :options='swiperOptions'>
                <swiper-slide 
                v-for="(item,index) in imgs" 
                :key="index"
                >
                    <img class="gallary-img" :src="item"> 
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name:'CommonGallary',
        props:{
            imgs:{
                type:Array,
                dafault(){
                    return ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg','http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png']
                    }
                }
            },
        data(){
            return{
               swiperOptions:{
                   pagination:{
                    el:".swiper-pagination",
                    type:'fraction'
                   },
                 
                } 
            }
        }
    }
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
    overflow inherit
.container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position: fixed;
    left 0
    right: 0;
    top: 0;
    bottom: 0;
    background #000
    .wrapper
        height: 0;
        width: 100%;
        padding-bottom 100%
        .gallary-img
           width: 100%; 
        .swiper-pagination
            color: #fff;   
            bottom -1rem
</style>
