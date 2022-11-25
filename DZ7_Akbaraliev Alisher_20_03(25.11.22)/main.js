class Cars{
    constructor(options){
        this.model=options.model;
        this.color=options.color;
        this.wheels=options.wheels;
    }
    start(){
        console.log('машина заведена');
    }
}
const BMW= new Cars({
    model: 'BMW',
    color: 'black',
    wheels:4
})


class Car1 extends Cars{
    constructor(options){
        super(options);
        this.type=options.type;
    }
}
const Audi= new Car1({
    model: 'Audi',
    color: 'white',
    wheels: 4,
    type: 'легковая'
})

class Car2 extends Car1{
    constructor(options){
        super(options);
        this.motor=options.motor;
    }
}
const Lada= new Car2({
    model: 'Lada',
    color: 'blue',
    wheels: 4,
    type: 'легковая',
    motor: 'дизель'
})

class Car3 extends Car2{
    constructor(options){
        super(options);
        this.version=options.version;
    }
}
const Merc= new Car3({
    model: 'Merc',
    color: 'black',
    wheels: 4,
    type: 'легковая',
    motor: 'дизель',
    version: 2
})
BMW.start()
console.log(BMW)
console.log(Audi)
console.log(Lada)
console.log(Merc)
