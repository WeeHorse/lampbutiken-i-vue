<template>
    <div class="columns">
        <section>
            <input type="text" v-model="searchString" placeholder="Ange din sökning">
            <h2 v-if="searchString">Sökresultat för: {{searchString}}</h2>
            <Produktlista v-if="searchString" :searchString="searchString"/>
        </section>
        <section>
            <h2>Aktuella produkter</h2>
            <Produktlista :visaNyheter="true"/>
        </section>
    </div>
</template>

<script>
import Produktlista from '/src/components/Produktlista.vue'

export default {
    data(){
        return {
            searchString: ''
        }
    },
    components: {
        Produktlista
    }
}

</script>

<style scoped>
.columns{
    display:flex;
    justify-content: space-between;
}
section:nth-child(2){
    max-width:30%;
}
</style>