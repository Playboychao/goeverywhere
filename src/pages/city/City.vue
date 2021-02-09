<template>
    <div>
        <CityHeader></CityHeader>
        <CitySearch></CitySearch>
        <CityList></CityList>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
    export default {
        name:"City",
        components:{
            CityHeader,
            CitySearch,
            CityList
        }
    }
</script>

<style lang="stylus" scoped>

</style>