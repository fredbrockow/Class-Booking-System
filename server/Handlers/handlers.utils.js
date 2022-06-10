
const personInfo_fields = [
    "firstName",
    "lastName",
    "username",
    "email",
    "phoneNumber"
]

/**
 * Test if a string contains only numbers
 * @param {*} string 
 * @returns true is string is has only numbers in it, false otherwise
 */
 const containsOnlyNumbers = (string) => {
    return /^[0-9]+$/.test(string);
}


/**
 *  Validates the fields for a person
 * @param {personInfo} Object 
 *  all fields must exist and not empty
 * fields : 
 *       firstName: 
 *       lastName: 
 *       username: 
 *       email: 
 *       phoneNumber: 
 * 
 * @returns true if valid, false otherwise
 */

 const validatePerson = (personInfo) => {
    isValid = true;
    
    personInfo_fields.forEach((field) => {
        
        if(!personInfo.hasOwnProperty(`${field}`)){
            isValid =false;
            return;
        }
        if (personInfo[`${field}`] === null){
            isValid =false;
            return;
        }
        if (personInfo[`${field}`] === undefined || personInfo[`${field}`] === "undefined") {
            isValid =false;
            return;
        }
        if(typeof(personInfo[`${field}`]) !== 'string'){
            isValid =false;
            return;
        }
    })

    return isValid;
 }

module.exports = {
    containsOnlyNumbers, validatePerson
}