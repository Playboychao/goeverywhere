<template>
    <div class="list">
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">北京</div>
                </div>
            </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>

        </div>
        <div class="area">
            <div class="title border-topbottom">A</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"CityList"
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.title
    line-height .44rem
    background #eee
    padding-left .2rem
    color #666
    font-size .26rem
    border-top 1px solid #777
.list:last-child
    border-bottom 1px solid #777
.button-list
    padding .1rem
    .button-wrapper
        float left 
        width: 33.33%;
        .button
            margin .1rem
            text-align center
            padding .1rem

</style>