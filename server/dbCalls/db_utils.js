const { v4: uuidv4 } = require('uuid');

const getUniqueId = () => {
    return uuidv4();
}

const remove_id = (element) => {
    const {_id, ...trimmedElement} = element;

    return trimmedElement;
}

const remove_idFromArray = (arr) => {
    arrResult = [];

    arr.forEach(element => {
        const {_id, password, ...trimmedElement} = element;
        arrResult.push(trimmedElement);
    });

    return arrResult;
};

module.exports = {
    remove_id, remove_idFromArray, getUniqueId
}