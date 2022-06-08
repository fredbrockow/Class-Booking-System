
const fs = require("fs");
const path = require('path');

const week = require("../data/calendarWeek.json");
const generatedUsers = require('../data/generatedFragments/generatedUsersPartials.json');


const findUserbyId = (id, userArrList) => {
    return userArrList.find(user => {
        // console.log(user.id);
        return user.id === id;
    });
}

const findClassByUserId = (userId, week) => {
    arrClassResults = [];

    week.forEach(element => { 
        
        for(let i = 1 ; i <= 6; ++i) {
            if(element[`slot${i}`] !== null){
                // console.log(element[`slot${i}`]);
                let classArr = element[`slot${i}`].student;
                let aClass = classArr.find(id => userId === id);

                if (aClass !== undefined) {
                    let classObj = {};
                    classObj.dayName = element.dayName;
                    classObj.slot = `slot${i}`
                    classObj.classId = element[`slot${i}`].class;
                    arrClassResults.push(classObj);
                }
            }
        }
    });

    return arrClassResults;
}


const getAllClassesForEachUsers = (usersArr, weekArr) => {

    arrResult = [];

    usersArr.forEach(user => {
        let arrOfClass = findClassByUserId ( user.id, weekArr);
        user.role = 123456789;
        user.classes = arrOfClass;

        arrResult.push({...user});
    });

    return arrResult;
}


const consolidateUserData = () => {
    let updatedUsersArray = getAllClassesForEachUsers(generatedUsers, week);
    
    
    fs.writeFile(path.join(__dirname,'../','data','dbDataUsers.json'), JSON.stringify(updatedUsersArray), "utf-8", err => {
        if (err) {
            console.error(err);
        }    
    });
};

module.exports = {consolidateUserData};

