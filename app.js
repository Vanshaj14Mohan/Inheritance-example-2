class Mammal{
    constructor(name){
        this.name = name;
        this.type = "warm-blooded";
    }
    eat(){
        console.log("I am eating");
    }
}

class Cat extends Mammal{
    constructor(name){
        super(name);
    }

    meow(){
        console.log("Meow....");
    }
}

class Dog extends Mammal{
    constructor(name){
        super(name);
    }

    bark(){
        console.log("Woofff");
    }
}
