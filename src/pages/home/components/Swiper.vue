<template>
    <div class="wrapper">
    <swiper :options="swiperOptions">
    <swiper-slide v-for="item of swiperList">
        <img class="swiper-img" :src="item.imgUrl"/> 
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    </div>
</template>

<script>
    import 'swiper/css/swiper.css'
    export default {
        name:'HomeSwiper',
        data () {
            return {
                swiperOptions: {
                    pagination:{
                        el:'.swiper-pagination'
                    },
                    swiperList:[{
                     id:'0001',
                     imgUrl:'https://imgs.qunarzz.com/sight/p0/1712/19/19bc8bdb7062470a3.img.jpg_710x360_a9d2dcfb.jpg'
                    },{  
                    id:'0002',
                     imgUrl:'https://imgs.qunarzz.com/sight/p0/1712/72/727eab86aa7950c8a3.img.jpg_710x360_b70ce9a8.jpg'
                    },{
                    id:'0003',
                     imgUrl:'https://imgs.qunarzz.com/sight/p0/1712/80/8046ad69c7c4b9fca3.img.jpg_710x360_514a456d.jpg'
                    }]
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background:#fff
    .wrapper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom:31.25%
        background: #eee;
        .swiper-img
            width: 100%

</style>