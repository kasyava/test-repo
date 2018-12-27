class Car {

    constructor(){
        console.log('Создается авто');
    }
}

class Porshe extends Car{
    constructor(){
        super();
        console.log('Создаем Porshe');
    }
}


class Cayman extends Porshe{
    constructor() {
        super();
        console.log('Модель Кайман');

    }

}


let porshe = new Cayman();
