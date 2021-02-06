<template>
    <div class="icons">
        <swiper>
            <swiper-slide>
                <div class="icon">
                    <div class="icon-img">
                        <img class="icon-imgcontent" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"/>
                        </div>
                    <p class="icon-desc">景点门票</p>   
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="icon">
                    <div class="icon-img">
                        <img class="icon-imgcontent" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"/>
                        </div>
                    <p class="icon-desc">景点门票</p>   
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name:'HomeIcons'
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.icons >>> .swiper-container
height 0
padding-bottom 50%
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
    line-height .44rem
    text-align center
    color: $darkTextColor;
</style>