

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

const getClassById = (classId, yoga_classes) => {

    let classTarget = {};

    yoga_classes.forEach(aClass => {

        if( aClass.id === classId){
            classTarget = {...aClass};
            return;
        }
    });

    return classTarget;
};


export {
    getTeacherById, getClassById
}