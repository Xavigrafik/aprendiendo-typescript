import powers from '../data/powers'

export class Hero { 
    constructor(
        public name: string,
        public id: number,
        public age:number
    ) { }

    get power():string { 
        return powers.find( power => power.id === this.id )?.desc || 'Not found';
    }

}
