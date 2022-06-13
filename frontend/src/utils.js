const slot_to_hours = {
    slot1 : "9h00 to 10h30",
    slot2 : "11h00 to 12h30",
    slot3 : "13h00 to 14h30",
    slot4 : "15h00 to 16h30",
    slot5 : "17h00 to 18h30",
    slot6 : "19h00 to 20h30"
}

const hours_to_slot ={
    "9h00 to 10h30" : "slot1",
    "11h00 to 12h30" : "slot2",
    "13h00 to 14h30" : "slot3",
    "15h00 to 16h30" : "slot4",
    "17h00 to 18h30" : "slot5",
    "19h00 to 20h30" : "slot6",
}

const MAX_STUDENT_PER_CLASS = 25;

const isObjectEmpty = (obj) => {

    for(let i in obj) return false;
    return true;

}

export {
    isObjectEmpty,
    slot_to_hours, hours_to_slot,
    MAX_STUDENT_PER_CLASS
}