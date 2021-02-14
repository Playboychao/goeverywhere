<template>
    <div>
        <CityHeader></CityHeader>
        <CitySearch></CitySearch>
        <CityList :cities="cities" :hot="hotCities"></CityList>
        <CityAlphabet></CityAlphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
    export default {
        name:"City",
        components:{
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        },
        data(){
            return{
                cities:{},
                hotCities:{}
            }
        },
        methods:{
            getCityInfo(){
                axios.get('./mock/city.json')
                .then(this.handleGetCityInfoSucc)
            },
            handleGetCityInfoSucc(res){
                res = res.data
                if(res.ret && res.data){
                    const data = res.data
                    this.cities = data.cities
                    this.hotCities = data.hotCities
                }
            }
        },
        mounted(){
            this.getCityInfo()
        }
    }
</script>

<style lang="stylus" scoped>

</style>