<template>
    <div>
        <Varukorg/>
        <BestForm v-if="!bestallt" />
        <div v-else>
            <h3>Tack för din beställning! Vi kommer att skicka dina varor till:</h3>
            <ul>
                <li v-for="(value, key) in order" :key="key">
                    <span v-if="key != 'innehall'">
                        {{key}}: {{value}}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Varukorg from '/src/components/Varukorg.vue'
import BestForm from '/src/components/BestForm.vue'

export default {
    components: {
        Varukorg,
        BestForm
    },
    computed:{
        bestallt(){
            return (this.$store.state.order)
        },
        order(){
            return this.$store.state.order
        }
    }
}

</script>