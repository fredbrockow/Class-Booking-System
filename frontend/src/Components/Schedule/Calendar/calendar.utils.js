
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


/* Those are imported for css purpose*/
const class_level_color = {
    beginner: "#ABD2FA",
    intermediate: "#708BEB",
    advanced: "#41628E"
};

const classHours = [
    "9h00 to 10h30",    //slot1
    "11h00 to 12h30",   //slot2
    "13h00 to 14h30",   //slot3
    "15h00 to 16h30",   //slot4
    "17h00 to 18h30",   //slot5
    "19h00 to 20h30"    //slot6
];

//not used
const slot_color = {
    slot1 : "#ABD2FA",
    slot2 : "#7692FF",
    slot3 : "#708BEB",
    slot4 : "#5977CB",
    slot5 : "#516DBB",
    slot6 : "#41628E"
}

const days_colors = {
    monday : "97DBAE",
    tuesday : "#F1E1A6",
    wednesday : "#C3E5AE"
}

export {
    getClassById, 
    classHours, class_level_color, 
    slot_color, days_colors
}