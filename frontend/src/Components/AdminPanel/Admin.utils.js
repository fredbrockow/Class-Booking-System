

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

export {
    formatingTeachers
}