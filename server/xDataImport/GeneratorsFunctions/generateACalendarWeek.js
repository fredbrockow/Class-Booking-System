const path = require('path');
const fsPromises = require('fs').promises;

const {getARandomNumber, getArrayOfUniqueRandomNumber} = require (path.join(__dirname, '../', '/utils','utils_generators.js'))
const calendarWeek = require(path.join(__dirname, '../', '/baseData','calendarWeek_Template.json'));
const classesIds = require(path.join(__dirname, '../', '/data','/generatedFragments','classesIds.json'));
const usersIds = require(path.join(__dirname, '../', '/data','/generatedFragments','usersId.json'));


const numberOfSlotsPerDay = 6;
const maxStudentPerClass = 25;

const getSomeStudents = (numStudents) => {
    let resultArr = [];

    if( numStudents >= usersIds.length ){
        return usersIds;
    }

    let numberOfStudents = getARandomNumber(numStudents);
    let arrayOfIndexesOfStudentsIds = getArrayOfUniqueRandomNumber(numberOfStudents, usersIds.length-1);

    arrayOfIndexesOfStudentsIds.forEach(element => {
        resultArr.push(usersIds[element]);
    });

    return resultArr;
}

const createACalendarWeek = () => {

    let newCalendar = [];
    
    calendarWeek.forEach(day => {
        
        let numOfSlot = getARandomNumber(numberOfSlotsPerDay);
        let slotsWithClass = getArrayOfUniqueRandomNumber(numOfSlot, numberOfSlotsPerDay);

        slotsWithClass.forEach(slotNumber => {
            let slotObj = {};
            let indexOfClass = getARandomNumber(classesIds.length-1);
            let arrOfStudents = getSomeStudents(maxStudentPerClass);

            slotObj.class = classesIds[indexOfClass];
            slotObj.student = arrOfStudents;

            day[`slot${slotNumber}`] = slotObj;

        });

        newCalendar.push({...day});
    });

    return newCalendar;
};


const generateACalendarWeek = async () => {

    let calendarWeek = createACalendarWeek();

    await fsPromises.writeFile(path.join(__dirname,'../', 'data', 'calendarWeek.json'), JSON.stringify(calendarWeek), "utf-8", err => {
        if (err) {
            console.error(err);
        }    
    });
    console.log("done generating calendar for a week");
}


module.exports = {generateACalendarWeek}