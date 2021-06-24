<template>
    <form @submit="submit">
        <h3>Ange dina uppgifter</h3>
        <div>
            <label>Förnamn: </label>
            <input type="text" v-model="fornamn">
        </div>
        <div>
            <label>Efternamn: </label>
            <input type="text" v-model="efternamn">
        </div>
        <div>
            <label>Gatuadress: </label>
            <input type="text" v-model="gatuadress">
        </div>
        <div>
            <label>Postnummer: </label>
            <input type="text" v-model="postnummer">
        </div>
        <div>
            <label>Ort: </label>
            <input type="text" v-model="ort">
        </div>
        <div>
            <label>Epost: </label>
            <input type="email" v-model="epost">
        </div>
        <div>
            <label>Telefonnr (för sms-avisering): </label>
            <input type="text" v-model="telefonnr">
        </div>
        <div>
            <input type="submit" value="Skicka din beställning">
        </div>
    </form>
</template>

<script>

export default {
    methods:{
        submit(event){
            event.preventDefault()
            let order = {
                innehall: this.$store.state.varukorg,
                fornamn: this.fornamn,
                efternamn: this.efternamn,
                gatuadress: this.gatuadress,
                postnummer: this.postnummer,
                ort: this.ort,
                epost: this.epost,
                telefonnr: this.telefonnr
            }
            this.$store.commit('addOrder', order)
        }
    }
}
</script>