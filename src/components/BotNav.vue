<template>
    <div>
        <v-btn v-for="(ruta,i) in rutas" :key="i" color="success"
        @click="InsertarRuta(ruta.ruta)" class="my-3" block >
            <span>{{ ruta.name }}</span>
        </v-btn>
 </div>
</template>

<script>
    export default{
        name: 'BotNav',
        data: () => ({
            rutas:[
                {name: 'home', ruta: '../home'},
                {name: 'about',ruta: '/about'},
                {name: 'help', ruta: '/help'},
                {name: 'ConsulServe',ruta: '/Consul'}
            ]
        }),
        methods: {
            InsertarRuta(ruta){
                this.$router.push(ruta)

            }
        },
    }
</script>