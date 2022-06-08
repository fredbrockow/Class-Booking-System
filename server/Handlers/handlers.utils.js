
/**
 * Test if a string contains only numbers
 * @param {*} string 
 * @returns true is string is has only numbers in it, false otherwise
 */
 const containsOnlyNumbers = (string) => {
    return /^[0-9]+$/.test(string);
}

module.exports = {
    containsOnlyNumbers
}