

const getARandomNumber = (range) => {
    return (Math.floor(Math.random() * range +1 ));
}


const getArrayOfUniqueRandomNumber = (length, range) => {
    let arrResult = [];

    if (length > range){
        return [];
    }


    for (let i = 0; i < length; ++i) {
        let number = getARandomNumber (range);
        
        if (arrResult.length < 1) {
            arrResult.push(number);

        }else if ( arrResult.find((num) => num === number) === undefined) {
            arrResult.push(number);
        }
        else {
            i-= 1;
        }
    }
    return arrResult;
}

module.exports = {
    getARandomNumber, getArrayOfUniqueRandomNumber
}