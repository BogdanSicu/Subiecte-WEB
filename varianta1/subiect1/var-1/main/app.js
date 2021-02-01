function calculateFrequencies(input, dictionary){

    if(typeof input === 'string' || input instanceof String){

        for(let element in dictionary){
            if(dictionary[element] instanceof String || typeof dictionary[element] === 'string'){
               
                
            }else{
                throw Error('Invalid dictionary format')
            }
        }

    }else{
        throw Error('Input should be a string')
    }

}

const app = {
    calculateFrequencies
};

module.exports = app;