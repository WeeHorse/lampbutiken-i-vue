<template>
    <div>
        <article v-for="product in filteredProducts" :key="product.id">
            <router-link class="list-product" :to="'/produkt/' + product.id">
                <div><img :src="product.bild"></div>
                <div>
                    <h3>{{product.titel}}</h3>
                    <p>{{product.pris}} kr</p>
                </div>
            </router-link>
        </article>
    </div>
</template>

<script>
export default {
    props:['searchString','visaNyheter','kategori'],
    computed:{
        products(){
            return this.$store.state.products
        },
        filteredProducts(){
            // list for the products
            let result = []

            // show nyheter
            if(this.visaNyheter){
                result = this.products.filter( product => product.nyhet )
                return result
            }

            // show kategori
            if(this.kategori){
                result = this.products.filter( product => product.category == this.kategori )
                return result
            }

            // show all products
            if(!this.searchString){
               return this.products 
            }
 
            // show searched products
            for(let product of this.products){
                if(product.titel.toLowerCase().includes(this.searchString.toLowerCase())){
                    result.push(product)
                }
                else if(product.text.toLowerCase().includes(this.searchString.toLowerCase())){
                    result.push(product)
                }
            }

            return result // the final list of products is returned
        }
    }
}

</script>

<style scoped>
.list-product{
    display: flex;
    margin-bottom:1vh;
    margin-right:5vw;
    background-color: rgba(255,255,255,0.8);
}
img{
    width: 100%;
}
.list-product > div:first-child{
    width:20%;
    margin-right:1vw;
}
a{
    text-decoration: none;
    color:black;
}
h3{
    margin-bottom:0;
}
p{
    margin:0;
}
</style>