(() => {
    const hero: string = 'Flash';

    function returnName(): string {
        return hero;
    }

    const activateBatsignal = () => {
        return 'Batseñal activada!'
    }

    console.log(typeof activateBatsignal);


    // ARGUMENTOS REQUERIDOS/OPCIONALES: ///////////////////
    
    const fullName = (firstName: string, lastName?: string)=>{
        return `${firstName} ${lastName||"no-last-name"}`
    }
    
    const name = fullName('Tony');
    
    console.log(name);
    

    // ARGUMENTOS POR DEFECTO: ///////////////////


    
})()