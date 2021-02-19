<template>
    <div>
        <DetailBanner></DetailBanner>
        <DatailHeader></DatailHeader>  
        <div class="content"></div> 
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DatailHeader from './components/Header'
    export default {
        name:'Detail',  
        components:{
            DetailBanner,
            DatailHeader
        }
    }
</script>

<style lang="stylus" scoped>
.content
    height: 50rem;
</style>