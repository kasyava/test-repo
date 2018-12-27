class Car {
    constructor(){
        this.price = 100;
    }


    isMoving(){
        console.log("Yes it's moving");
    }

}

class Honda extends Car{
    constructor() {
        super();
        this.price =60;
    }

}


let accord = new Honda();
console.log(accord);