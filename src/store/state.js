let defaultCity = '上海'
try{
    if(localStorage.city){
        defaultCity = localStorage.city
    }
} catch (e) {
    console.log(123)
}
export default {
    city:defaultCity
}