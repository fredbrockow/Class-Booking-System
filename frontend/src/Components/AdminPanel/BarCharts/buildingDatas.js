
export const classHours = [
    "9h00 to 10h30",    //slot1
    "11h00 to 12h30",   //slot2
    "13h00 to 14h30",   //slot3
    "15h00 to 16h30",   //slot4
    "17h00 to 18h30",   //slot5
    "19h00 to 20h30"    //slot6
];

export const slotColors = {
    slot1:"#C3E5AE",
    slot2:"#97DBAE",
    slot3:"#FFD384",
    slot4:"#FFAB73",
    slot5:"#8AC4D0",
    slot6:"#23689B"
}

export const usersPerClassColor = {
    total: "#23689B",
    normalized: "#FFAB73",
};

/**
 *  I may need this later
 * @param {*} teacherId 
 * @returns 
 */

// const getTeacherById = (teacherId) => {
//     const teacherObj = {};

//     teachers.forEach((teacher) => {
//         if (teacher.id === teacherId){
//             teacherObj.firstName = teacher.firstName;
//             teacherObj.lastName = teacher.lastName;
//             return;
//         }
//     })

//     return {...teacherObj};
// }

const getClassById = (classId, yogaClasses) => {
    let classTarget = {};

    yogaClasses.forEach(aClass => {

        if( aClass.id === classId){
            classTarget = {...aClass};
            return;
        }
    });

    return classTarget;
};

export const createUsersPerDayDataSet = (calendar) => {
    const keys = [];
    const ObjArr = {
        slot1: [],
        slot2: [],
        slot3: [],
        slot4: [],
        slot5: [],
        slot6: [],
    }

    calendar.forEach((day) => {
        keys.push(day.dayName);

        for (let i = 1 ; i<= 6 ; ++i){
            if(day[`slot${i}`]!== null){
               ObjArr[`slot${i}`].push(day[`slot${i}`].student.length);
            }else{
                ObjArr[`slot${i}`].push(0);
            }
        }
    });

    return {keys,data:ObjArr};
};

export const createUsersPerClass = (yogaClasses , calendar) => {

    const keys = [];
    const objClasses= {};
    const dataArr = [];

    yogaClasses.forEach(yogaClass => {
        if(yogaClass.isActive){
            keys.push(yogaClass.title);
        }
    });
    
    calendar.forEach((day) => {

        for (let i = 1 ; i<=6; ++i){
            if(day[`slot${i}`]!== null){
                let yogaClass = getClassById (day[`slot${i}`].class, yogaClasses);

                if( objClasses.hasOwnProperty(`${yogaClass.title}`)){
                    objClasses[`${yogaClass.title}`].numOfStudent += day[`slot${i}`].student.length;
                    objClasses[`${yogaClass.title}`].numOfClass += 1;
                }else{
                    objClasses[`${yogaClass.title}`] = {
                        numOfStudent : day[`slot${i}`].student.length,
                        numOfClass : 1
                    };
                    
                }
            }
        }

    })

    keys.forEach((element) => {
    
        if (objClasses.hasOwnProperty(`${element}`)){
            dataArr.push(objClasses[element]);
        }else {
            dataArr.push({numOfStudent: 0, numOfClass: 0});
        }
    
    }
        )

    return {keys: keys, data: dataArr};
}

