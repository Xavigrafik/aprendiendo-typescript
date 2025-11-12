(() => {

    // Un type NO puede extenderse, un interface SI.

    interface Hero {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }


    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    }

    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    }

    //////////////////////////////////////


    interface Client {
        name: string;
        age?: number;
        address: Address; // incluye el type  
        getFullAddress(id: string): string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFullAddress(id: string) {
            return this.address.city;
        }
    }

    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'K2S U2A'
        },
        getFullAddress(id: string) {
            return this.address.city;
        }
    }

})()