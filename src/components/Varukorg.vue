<template>
    <div>
        <h3 v-if="$route.name == 'Bestall'">Din beställning</h3>      
        <div v-else class="cart">
            <span class="material-icons">shopping_cart</span>
        </div>
        <ul>
            <li v-for="produkt in varukorgsProdukter" :key="produkt.id">
                {{produkt.titel}} 
                <span v-if="produkt.antal > 1"> {{produkt.antal}} x {{produkt.pris}} kr = </span>
                {{produkt.antal * produkt.pris}} kr
            </li>
            <li>Total: {{total}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        varukorgsProdukter(){
            return this.$store.state.varukorg
        },
        total(){ // här kommer vi att räkna ut totalen
            let total = 0
            for(let produkt of this.varukorgsProdukter){
                total += produkt.antal * produkt.pris
            }
            return total
        }
    }
}
</script>

<style scoped>
.cart{
    text-align: right;
}
.cart>span{
    font-size:200%;
}
ul{
    list-style: none;
}
</style>