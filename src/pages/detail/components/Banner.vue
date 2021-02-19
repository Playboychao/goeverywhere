<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg">
            <div class="banner-info">
                <div class="banner-title">
                    {{this.sightName}}
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xeaf2;
                    </span>
                    {{this.bannerImgs.length}}
                </div>
            </div>
        </div>
        <CommonGallary 
        :imgs="bannerImgs"
        v-show="showGallary"
        @close="handleGallaryClick"
        >
        </CommonGallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
    export default {
        name:'DetialBanner',
        props:{
            signName:String,
            bannerImg:String,
            bannerImgs:Array
            },
        data(){
           return{
               showGallary:false
           }
        },
        methods:{
            handleBannerClick(){
                this.showGallary = true
            },
            handleGallaryClick(){
                 this.showGallary = false
            }
        },
        components:{
            CommonGallary
        }
    }
</script>

<style lang="stylus" scoped>
.banner
    position: relative;
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
        width: 100%
    .banner-info
        display:flex 
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        line-height .6rem
        color #fff
        background-image:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8))
        .banner-title
            flex: 1;
            font-size:.32rem
            padding 0 .2rem
        .banner-number
            height: .32rem;
            line-height .32rem
            margin-top .14rem
            padding 0 .4rem
            border-radius: .2rem
            background rgba(0,0,0,.8)
            font-size .24rem
            .banner-icon
                font-size .24rem
</style>