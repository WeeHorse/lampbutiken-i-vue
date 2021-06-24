import { createStore } from "vuex" 

const store = createStore({

   state:{
        categories: ['Dekorlampor','Golvlampor','Taklampor'],
        products: [
            {
                id: 1, // url kommer vi att skapa i produktlistan (komponent)
                bild: 'https://www.mathmos.se/images/D/mathmos_heritage_astro_lavalampa_koppar.jpg', 
                titel: 'Lavalampa', 
                text: 'Astro är den första lavalampan och skapades 1963 av Mathmos grundare och uppfinnare av lavalampan, Edward Craven Walker. Dessa modeller är tillverkade av handspunnen anodiserad metall i kopparfinish, samma som de ursprungliga Astrolamporna på 60- och 70-talen. Den ser lika fräsch ut idag som den gjorde 1963 när den första lampan rullade av bandet i Poole, Dorset. Den finns i tio lavafärgkombinationer, alla med Mathmos unika formel med lång livslängd. Reservdelar för denna klassiska design finns att beställa från Mathmos, både för modeller tillverkade på 60-talet som för dagens moderna modeller.', 
                pris: 950, 
                recensioner: [],
                category: 'Dekorlampor',
                nyhet: true
            },
            {
                id: 2,
                bild: 'https://www.lamporochljus.se/media/catalog/product/cache/415174b86eb9fca9e79f1c0aefa39293/9/8/4959_98222_0.jpg', 
                titel: 'Magna industriell golvlampa', 
                text: 'Magna 40 Eglip golvlampa är en av våra favoriter. Det passar perfekt i en tuff och industriell interiör. En raffinerad golvlampa är golvlampa Magna 40 Eglip. Denna lampa har inte bara en vacker design på utsidan, utan säkert också på insidan. Den gyllene färgen ger en fantastisk effekt. Slå på ljuset så kommer ditt hem att klä sig i en vacker gyllene glöd! Du kan vrida huven uppåt så att du kan bestämma var ljuset ska lysa i ditt inre. Lampan är också dimbar (dimmer ingår ej). På så sätt kan du skapa rätt atmosfär i ditt hus! Lampan har en stor E27-armatur och levereras utan ljuskälla, så se till att du beställer den med den. Detta stativ har en höjd av 144 cm, foten har en diameter på 60,1 cm. Sladden har en längd på 320 cm. Välj atmosfär och gå till Magna 40 Eglip golvlampa!', 
                pris: 2990, 
                recensioner: [],
                category: 'Golvlampor'
            },
            {
                id: 3,
                bild: 'https://images.fyndiq.se/image/upload/f_auto/t_600x600/prod/89b67da9f35e4560/led-lampa-tradlos-nattlampa-enhorning-unicorn-8e26a', 
                titel: 'Unicorn nattlampa', 
                text: 'En rolig LED-lampa formad som en enhörning. Idealisk för barn som kan användas som lampa, nattlampa, leksak och barndekoration. Lampan blir inte varm utan håller en sval temperatur.', 
                pris: 495, 
                recensioner: [],
                category: 'Dekorlampor',
                nyhet: true
            },
            {
                id: 4,
                bild: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff1%2Fce%2Ff1ce6bba8e5d14f5d7d4294e11212ee09e5e9a19.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]', 
                titel: 'Taklampa i textil och metall', 
                text: 'En taklampa i metall med skärm i textil och rökfärgat glas undertill. Lampan har textilklädd sladd med reglerbar längd. Passar ljuskällor med E27-sockel. Ljuskälla ingår ej. Produkten levereras omonterad. Höjd 19 cm. Skärmens diameter 52 cm. Sladdlängd 2 meter. Vikt ca 1,8 kg.', 
                pris: 750, 
                recensioner: [],
                category: 'Taklampor'
            },
            {
                id: 5,
                bild: 'https://www.lampgallerian.se/images/normal/78174-40-30.jpg', 
                titel: 'Manuella', 
                text: 'Manuela är en trendig taklampa som kombinerar moderna detaljer och dekorativ konstruktion. Det är en lampa som passar lika bra i vardagsrummet som i sovrummet och gör sig allra bäst med en dekorativ ljuskälla.', 
                pris: 5475, 
                recensioner: [],
                category: 'Taklampor'
            },
            {
                id: 6,
                bild: 'https://www.lampgallerian.se/images/normal/trollslandatak.jpg', 
                titel: 'Trollslända Oliv', 
                text: 'Trollslända oliv, en snygg tiffanylampa i handskuret glas av mycket hög kvalitet. Härliga mörka nyanser och ett snyggt mönster av trollsländor.', 
                pris: 385, 
                recensioner: [],
                category: 'Taklampor'
            },
        ],
        varukorg:[],
        order: null
   },

   mutations:{
       addToCart(state, product){
            // kommer att lägga till logik för att hantera antal
            // loopa över state.varukorg och undersöka om produkten vi försöker lägga till redan finns
            // om den inte finns, lägg till produkten
            // men om den redan finns, öka antal med 1 (istället för att lägga till den)

            for(let prod of state.varukorg){ // = för varje produkt i varukorgen
                if(prod.id === product.id){
                    prod.antal++ // vi lägger till ett exemplar på en produkt som redan fanns i varukorgen
                    return // vi hoppar över resten av metoden om vi har hittat produkten i varukorgen
                }
            }

            // den inkommande produkten får nu antal 1 (första gången en produkt läggs till)
            product.antal = 1
            // och läggs för första gången till i varukorgen
            state.varukorg.push(product)
       },
       addOrder(state, order){
           state.order = order
       }
   },

   actions:{
        
   }

})

export default store