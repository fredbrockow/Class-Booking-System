const fsPromises = require('fs').promises;
const path = require('path');

const classes = require("../baseData/yogaClass.json");


const getClassesIds = (classesList) => {
    let arrResult = [];

    classesList.forEach(element => {
        arrResult.push(element.id);
    });

    return arrResult;
}


const generateClassesIds = async () => {
    arrClassesIds = getClassesIds(classes);
    
    await fsPromises.writeFile(path.join(__dirname,'../', 'data', 'generatedFragments','classesIds.json'), JSON.stringify(arrClassesIds), "utf-8", err => {
        if (err) {
            console.error(err);
        }    
    });
    console.log("done generating Classes ids");
}


module.exports = {generateClassesIds}
