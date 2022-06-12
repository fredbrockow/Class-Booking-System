
const slot_to_hours = {
    slot1 : "9h00 to 10h30",
    slot2 : "11h00 to 12h30",
    slot3 : "13h00 to 14h30",
    slot4 : "15h00 to 16h30",
    slot5 : "17h00 to 18h30",
    slot6 : "19h00 to 20h30"
}



const getTeacherById = (teacherId, teachers) => {
    const teacherObj = {};

    teachers.forEach((teacher) => {
        if (teacher.id === teacherId){
            teacherObj.firstName = teacher.firstName;
            teacherObj.lastName = teacher.lastName;
            return;
        }
    })

    return {...teacherObj};
}


const formatingClasses = (yogaClasses, teachers) => {
    const arrResult = []

    yogaClasses.forEach ((yogaClass) => {

        const teacher = getTeacherById (yogaClass.teacher, teachers);

        arrResult.push(
            {
                value : yogaClass.id,
                placeHolder : `${yogaClass.title} - ${teacher.firstName} ${teacher.lastName}`
            }
        )
    })

    return arrResult;
}


const formatingTeachers = (teachers) => {
    const arrResult = [];

    teachers.forEach((teacher) => {

        arrResult.push(
            {
                value: teacher.id,
                placeHolder: `${teacher.firstName} ${teacher.lastName}`
            }
        )
    });
    
    return arrResult;
}

const formatingCalendar = (calendar) => {
    const objResult = {days:[]};
    
    calendar.forEach((day) => {
        const arrSlot = [];
        objResult.days.push(
            {
                value: day.dayName,
                placeHolder: day.dayName
            }
        )
        
        // get the free slots for the day
        for(let i = 1 ; i <= 6 ; ++ i) {
            if(day[`slot${i}`] === null){
                arrSlot.push(
                    {
                        value: `slot${i}`,
                        placeHolder : slot_to_hours[`slot${i}`]
                    }
                )
            }
        }

        objResult[`${day.dayName}`] = arrSlot;
    });

    return objResult;
}

export {
    formatingTeachers, formatingClasses, formatingCalendar
}