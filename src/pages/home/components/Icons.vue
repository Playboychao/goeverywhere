<template>
    <div class="icons">
        <div class="icon">
            <div class="icon-img">
                <img class="icon-imgcontent" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"/>
                <p class="icon-desc">景点门票</p>
            </div>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-imgcontent" src="http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png"/>
                 <p class="icon-desc">滑雪季</p>
            </div>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-imgcontent" src="http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png"/>
                 <p class="icon-desc">泡温泉</p>
            </div>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-imgcontent" src="http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png"/>
                <p class="icon-desc">动植园</p>
            </div>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-imgcontent" src="http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png"/>
                 <p class="icon-desc">游乐园</p>
            </div>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-imgcontent" src="http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png"/>
                <p class="icon-desc">演出</p>
            </div>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-imgcontent" src="http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png"/>
                 <p class="icon-desc">城市观光</p>
            </div>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-imgcontent" src="http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png"/>
                 <p class="icon-desc">一日游</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'HomeIcons'
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.icons
    width: 100%;
    overflow:hidden
    height: 0
    padding-bottom: 50% 
    .icon
        position: relative;
        overflow:hideen
        float:left
        width: 25%
        height: 0;
        padding-bottom:25%
        .icon-img
            position:absolute
            top: 0;
            left: 0;
            right: 0;
            bottom: .44rem;
            box-sizing border-box
            padding .1rem
            .icon-imgcontent
                display block
                margin 0 auto
                height: 100%;
        .icon-desc
            position:absolute
            left: 0;
            right: 0;
            bottom: 0;
            height: .44rem;
            line-height 1.35rem
            text-align center
            color: $darkTextColor;
</style>