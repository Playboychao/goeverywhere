<template>
    <div>
        <DetailBanner
            :signName="signName"
            :bannerImg="bannerImg"
            :bannerImgs="gallaryImgs"
        ></DetailBanner>
        <DatailHeader></DatailHeader>  
        <div class="content"> 
        <DetailList :list="list"></DetailList>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DatailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
    export default {
        name:'Detail',  
        components:{
            DetailBanner,
            DatailHeader,
            DetailList
        },
        data(){
            return{
                signName:'',
                bannerImg:'',
                gallaryImgs:[],
                list:[]
            }
        },
        methods:{
            getDetailInfo(){
                axios.get('./mock/detail.json',{
                    params:{
                        id:this.$route.params.id
                    }
                }).then(this.handleGetDataSucc)
            },
            handleGetDataSucc (res){
                res = res.data
                if (res.ret&&res.data) {
                    const data = res .data
                    this.signName = data.signName
                    this.bannerImg = data.bannerImg
                    this.gallaryImgs = data.gallaryImgs
                    this.list = data.categoryList
                }
            }
        },
         mounted(){
            this.getDetailInfo()
        },
    }
</script>

<style lang="stylus" scoped>
.content
    height: 50rem;
</style>