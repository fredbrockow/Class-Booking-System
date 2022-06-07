
// Tags or level
const tags = ["beginner", "intermediate", "advanced"];

const yoga_classes = [
    {
        id: 123456,
        title: "Pilates",
        imgSrc: "/public/Hatha.jpg",
        description: "Pilates is a form of fitness that strengthens the deep muscles of the mid-body to support movement"+
        " and resist environmental pressures. Pilates stretches and lengthens the major muscles of the body by correcting "+
        "imbalances. It improves flexibility, strength, balance and body awareness.",
        teacher: "Mathilde Racicot",
        tag: tags[2],
        isActive: true
    },
    {
        id: 234567,
        title: "Hatha Yoga Foundations",
        imgSrc: "/public/Hatha.jpg",
        description: "Learning to align and breathe well in a yoga posture is fundamental! If you are well aligned, "+
        "the effects of the postures will be more profound and will make your practice more effective."+
        "These are the ideal classes to deepen your understanding of the postures and to build towards a more advanced practice.",
        teacher: "Sebastien Tremblay",
        tag: tags[0],
        isActive: true
    },
    {
        id: 345678,
        title: "Vinyasa Flow",
        imgSrc: "/public/Hatha.jpg",
        description: "Our Vinyasa flow class is comprised of a sequence of poses that are connected by movement and breath. The majority of the poses are foundational and are accessible to all. Get ready to sweat",
        teacher: "Gabriella Villemont",
        tag: tags[1],
        isActive: true
    },

];

const monday = {
    name: "monday",
    slots: [
        null,   //slot1
        123456, //slot2
        null,   //slot3
        null,   //slot4
        234567, //slot5
        null    //slot6
        ]
    };
        

const tuesday = {
    name: "tuesday",
    slots: [
        234567, //slot1
        null,   //slot2
        null,   //slot3
        123456, //slot4
        null,   //slot5
        null    //slot6
        ]
    };

const wednesday = {
    name: "wednesday",
    slots: [
        null, //slot1
        345678,   //slot2
        null,   //slot3
        234567, //slot4
        null,   //slot5
        123456    //slot6
        ]
    };



const a_week = [monday, tuesday, wednesday];

const getClassById = (classId, yoga_classes) => {
    let classTarget = {};

    yoga_classes.forEach(aClass => {

        if( aClass.id === classId){
            classTarget = {...aClass};
            return;
        }
    });

    return classTarget;
}

module.exports = {
    yoga_classes, a_week,
    getClassById
}