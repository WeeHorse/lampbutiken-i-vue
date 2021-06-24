<template>
    <article>
        <section>
            <h2>{{product.titel}}</h2>
            <p>{{product.text}}</p>
            <p><strong>Pris: {{product.pris}} kr</strong></p>
            <button @click="addToCart(product)">Lägg i varukorgen</button>
        </section>
        <section>
            <img :src="product.bild">
        </section>
    </article>
</template>

<script>
export default {
    computed: {
        product(){
            for(let product of this.$store.state.products){
                if(product.id == this.$route.params.id){
                    return product                    
                }
            }
        }
    },
    methods:{
        addToCart(product){
            this.$store.commit('addToCart', product)
        }
    }
}
</script>

<style scoped>
article{
    display:flex;
}

section:first-child{
    width: 70vw;
    margin-right: 4vw;
}

img{
    width: 100%;
}

button{
    font-size: 110%;  
}

@media screen and (max-width: 500px) {

    article{
      flex-direction: column-reverse;
    }
    section:first-child{
        width: auto;
        margin-right: 0;
    }

}

</style>