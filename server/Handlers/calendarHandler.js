const { yoga_classes, a_week}  = require('../data/weeklyClasses');


const getCalendarHandler = async (req, res) => {

    res.status(200).json({
        status: 200,
        data: {
            yoga_classes: yoga_classes,
            calendar : a_week
        },
        message: "success"
    });
}

module.exports = {
    getCalendarHandler
}