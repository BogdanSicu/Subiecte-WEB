class Duck{
    constructor(name){
        if(name instanceof String || typeof name === 'string'){
            this.name = name
        }
        else throw Error('name must be string or String')
        
    }
    move(){
        return `${this.name} is moving`
    }
    swim(){
        return `${this.name} is swimming`
    }
}

class RubberDuck extends Duck{
    float(){
        return `${this.name} floats`
    }
    swim(){
        return `${this.name} can't swim, only float`
    }
}



const app = {
    Duck,
    RubberDuck
}

module.exports = app