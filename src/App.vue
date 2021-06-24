<template>
    <div class="site">
        <header>
            <div>
                <h1>Lampbutiken</h1>
                <Varukorg v-if="showCart && $route.name != 'Bestall'"/>
            </div>
            <Meny/>
        </header>
        <main>
            <router-view/>
        </main>
        <footer>
            <Oppettider/>
            <Kontaktinfo/>
        </footer>
    </div>
</template>

<script>
import Oppettider from '/src/components/Oppettider.vue'
import Kontaktinfo from '/src/components/Kontaktinfo.vue'
import Meny from '/src/components/Meny.vue'
import Varukorg from '/src/components/Varukorg.vue'

export default {
    components:{
        Oppettider,
        Kontaktinfo,
        Meny,
        Varukorg
    },
    computed:{
        showCart(){
            return this.$store.state.varukorg.length > 0
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Viaoda+Libre&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

body{
    margin:0;
    font-size: 20px;
    font-family: Lora;
    background-image: url(https://c.wallhere.com/photos/f9/8c/lines-50481.png!d);
    background-size: cover;
    background-attachment: fixed;
}

.site{
    background-color: rgba(255, 255, 255, 0.5);
}

@media screen and (max-width: 500px){
    body{
        font-size: 16px;
    }
}

footer{
    display: flex;
    justify-content: space-between;
    background-color:rgba(144, 238, 144, 0.85);
}
header{
    background-color:rgba(173, 216, 230, 0.85);
}
header > div{
    display: flex;
    justify-content: space-between;
}

h1, h2, h3{
    margin-top:0;
}

header, 
main, 
footer{
    padding:2.5vh 5vw 2.5vh 5vw;
}

.site{
    display: flex;
    flex-direction: column;
    min-height:100vh;
    justify-content: space-between;
}

main{
    flex-grow: 1;
}

header h1{
    font-family: 'Viaoda Libre';
    font-size: 250%
}

h2{
    font-style: italic;
}

</style>