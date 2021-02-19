<template>
    <div>
        <DetailBanner></DetailBanner>
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
    export default {
        name:'Detail',  
        components:{
            DetailBanner,
            DatailHeader,
            DetailList
        },
        data(){
            return{
                list:[{
                    title:"成人票",
                    children:[{
                        title:'成人三馆联票',
                        children:[{
                            title:'成人三馆联票-某连锁店销售',
                        }]
                    },{
                        title:'成人五馆联票',
                        children:[{
                            title:'成人五馆联票-某连锁店销售',
                        }]
                    }]
                },{
                    title:"学生票",
                    children:[{
                        title:'学生证购票',
                        children:[{
                            title:'学生证购票-购票8折',
                        }]
                    },{
                        title:'学生证购团票',
                        children:[{
                            title:'学生证购团票-购票5折',
                        }]
                    }]
                },{
                    title:"儿童票",
                    children:[{
                        title:'儿童购票',
                        children:[{
                            title:'儿童购票-1米2以下免费',
                        }]
                    },{
                        title:'儿童购票',
                        children:[{
                            title:'儿童购票-1米5以下半价',
                        }]
                    }]
                },{
                    title:"特惠票",
                    children:[{
                        title:'团体票',
                        children:[{
                            title:'团体票-10人以上购票6折',
                        }]
                    },{
                        title:'公司团建票',
                        children:[{
                            title:'公司团建票-出示有关单位手续8.8折',
                        }]
                    }]
                }]
            }
        }
    }
</script>

<style lang="stylus" scoped>
.content
    height: 50rem;
</style>