
const personInfo_fields = [
    "firstName",
    "lastName",
    "username",
    "email",
    "phoneNumber"
]

const classInfo_fields = [
    "title",
    "description",
    "teacher",
    "tag",
    "capacity",
    "isActive"
]

const daysAllowed = [
    "monday", 
    "tuesday", 
    "wednesday", 
    "thursday", 
    "friday", 
    "saturday"
];

const slotsAllowed = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6"];

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

 const validateClass = (classInfo) => {
    isValid = true;
    
    classInfo_fields.forEach((field) => {

        if(field === "isActive"){
            if(!classInfo.hasOwnProperty(`isActive`)){
                isValid =false;
            }
            else {
                if(typeof(classInfo[`isActive`]) !== 'boolean'){
                    isValid =false;
                }
            }
            return;
        }

        if(field === "teacher"){
            if(!classInfo.hasOwnProperty(`teacher`)){
                isValid =false;
            }

            return;
        }

        if(field === "capacity"){
            if(!classInfo.hasOwnProperty(`capacity`)){
                isValid =false;
            }
            else {
                if(typeof(classInfo[`capacity`]) !== 'number'){
                    isValid =false;
                }
            }
            return;
        }
        
        if(!classInfo.hasOwnProperty(`${field}`)){
            isValid =false;
            return;
        }
        if (classInfo[`${field}`] === null){
            isValid =false;
            return;
        }
        if (classInfo[`${field}`] === undefined || classInfo[`${field}`] === "undefined") {
            isValid =false;
            return;
        }
        if(typeof(classInfo[`${field}`]) !== 'string'){
            isValid =false;
            return;
        }
    })

    return isValid;
 }

const validateClassToAddToCalendar = (classInfo) => {
    let isValid = true;

    if (!classInfo.hasOwnProperty ('dayName')){
        isValid = false;
        return;
    }else if (
        daysAllowed.find(day => day === classInfo.dayName) === undefined
    ){
        isValid = false;
        return;
    }
    if (!classInfo.hasOwnProperty ('slotKey')){
        isValid = false;
        return;
    }
    else if (
        slotsAllowed.find(slot => slot === classInfo.slotKey) === undefined
    ){
        isValid = false;
        return;
    }

    if (!classInfo.hasOwnProperty (`class`)){
        isValid = false;
        return;
    } else if (typeof (classInfo.class) !== 'string'){
        isValid = false;
        return;
    }

    return isValid;
}

const validateAddClass = (classInfo) => {
    let isValid = true;

    if (!classInfo.hasOwnProperty ('dayName')){
        isValid = false;
        return;
    }
    else if (
        daysAllowed.find(day => day === classInfo.dayName) === undefined
    ){
        isValid = false;
        return;
    }

    if (!classInfo.hasOwnProperty ('slotKey')){
        isValid = false;
        return;
    }
    else if (
        slotsAllowed.find(slot => slot === classInfo.slotKey) === undefined
    ){
        isValid = false;
        return;
    }

    if (!classInfo.hasOwnProperty ('userId')){
        isValid = false;
        return;
    }
    else if(typeof (classInfo.userId) !== 'string'){
        isValid = false;
        return;
    }

    if (!classInfo.hasOwnProperty ('classId')){
        isValid = false;
        return;
    }
    else if(typeof (classInfo.classId) !== 'string'){
        isValid = false;
        return;
    }

    return isValid;
}

module.exports = {
    containsOnlyNumbers, validatePerson, validateClass,
    validateClassToAddToCalendar, validateAddClass
}