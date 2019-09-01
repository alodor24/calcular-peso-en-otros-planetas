new Vue({
    el: '#app',
    data: {
        peso: null,
        newton: 0.102,
        see: false,
        planets: [
            {
                name: 'Mercurio',
                description: 'Es el planeta del sistema solar más cercano al Sol y el más pequeño.',
                link: 'https://es.wikipedia.org/wiki/Mercurio_(planeta)',
                image: 'assets/images/mercurio.jpg',
                gravity: 3.70
            },
            {
                name: 'Venus',
                description: 'Es el segundo planeta del sistema solar cercano al Sol y el sexto más grande.',
                link: 'https://es.wikipedia.org/wiki/Venus_(planeta)',
                image: 'assets/images/venus.jpg',
                gravity: 8.87
            },
            {
                name: 'Tierra',
                description: 'Es el tercer planeta del sistema solar cercano al Sol y el quinto más grande.',
                link: 'https://es.wikipedia.org/wiki/Tierra',
                image: 'assets/images/tierra.jpg',
                gravity: 9.8
            },
            {
                name: 'Marte',
                description: 'Es el cuarto planeta del sistema solar cercano al Sol y el segundo más pequeño.',
                link: 'https://es.wikipedia.org/wiki/Marte_(planeta)',
                image: 'assets/images/marte.jpg',
                gravity: 3.71
            },
            {
                name: 'Júpiter',
                description: 'Es el quinto planeta del sistema solar cercano al Sol y el más grande.',
                link: 'https://es.wikipedia.org/wiki/J%C3%BApiter_(planeta)',
                image: 'assets/images/jupiter.jpg',
                gravity: 23.12
            },
            {
                name: 'Saturno',
                description: 'Es el sexto planeta del sistema solar cercano al Sol y el segundo más grande.',
                link: 'https://es.wikipedia.org/wiki/Saturno_(planeta)',
                image: 'assets/images/saturno.jpg',
                gravity: 8.96
            },
            {
                name: 'Urano',
                description: 'Es el séptimo planeta del sistema solar cercano al Sol y el tercero más grande.',
                link: 'https://es.wikipedia.org/wiki/Urano_(planeta)',
                image: 'assets/images/urano.jpg',
                gravity: 8.69
            },
            {
                name: 'Neptuno',
                description: 'Es el octavo planeta del sistema solar en distancia al sol y el más lejano.',
                link: 'https://es.wikipedia.org/wiki/Neptuno_(planeta)',
                image: 'assets/images/neptuno.jpg',
                gravity: 11
            },
            {
                name: 'Plutón',
                description: 'Es un planeta enano del sistema solar situado a continuación de la órbita de Neptuno.',
                link: 'https://es.wikipedia.org/wiki/Plut%C3%B3n_(planeta_enano)',
                image: 'assets/images/pluton.jpg',
                gravity: 0.81
            }
        ]
    },
    methods: {        
        calcularPeso: function(gravity) {
            let masa = parseInt(this.peso)
            let peso = masa * gravity
            let conversion = peso * this.newton            

            if(this.peso == '') {
                this.see = false
            } else {
                this.see = true
                return conversion.toFixed(2)
            }
        }
    }
})