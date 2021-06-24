<template>
    <div>
        <h2>{{$route.params.namn}}</h2>
        <Produktlista :kategori="$route.params.namn"/>
    </div>
</template>

<script>
import Produktlista from '/src/components/Produktlista.vue'

export default {
    components: {
        Produktlista
    }
}

</script>
