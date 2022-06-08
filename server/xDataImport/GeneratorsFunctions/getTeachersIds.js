const fsPromises = require('fs').promises;
const path = require('path');

const teachers = require("../baseData/teachers.json");

const getTeachersIds = (teacherList) => {
    let arrResult = [];

    teacherList.forEach(element => {
        arrResult.push(element.id);
    });

    return arrResult;
}

const generateTeachersIds = async () => {

    let arrTeachersIds = getTeachersIds(teachers);
    
    await fsPromises.writeFile(path.join(__dirname,'../', 'data', 'generatedFragments','teachersIds.json'), JSON.stringify(arrTeachersIds), "utf-8", err => {
        if (err) {
            console.error(err);
        }    
    });
    console.log("done generating teachers ids");
}

module.exports = {
    generateTeachersIds
}
