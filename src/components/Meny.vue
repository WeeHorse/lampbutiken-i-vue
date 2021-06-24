<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link v-for="category in categories" :key="category" :to="'/kategori/' + category">
            {{category}}
        </router-link>
        <router-link to="/bestall">Beställ</router-link>
    </nav>
</template>

<script>
export default {
    computed:{
        categories(){
            return this.$store.state.categories
        }
    }
}

</script>

<style scoped>
nav{
    display: flex;
    justify-content: space-around;
}
</style>