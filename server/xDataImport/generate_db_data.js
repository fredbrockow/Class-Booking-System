const fsPromises = require('fs').promises;
const path = require('path');

const {generateUsersFragmentsAndIds} = require ('./GeneratorsFunctions/getUsersAndIds')
const {generateClassesIds} = require ('./GeneratorsFunctions/getClassesIds');
const {generateTeachersIds} = require ('./GeneratorsFunctions/getTeachersIds');
const {generateACalendarWeek} = require ('./GeneratorsFunctions/generateACalendarWeek.js');
const {consolidateUserData} = require ('./GeneratorsFunctions/consolidateUserData');

const numOfUsersToGenerate = 40;

/**
 *  Bug , trying to read files on # 3 that aren t created yet (from #2)
 *  need to fix this when I have time
 *  note : fs.write is a promise !
 * 
 */

/** #1 */
// generateUsersFragmentsAndIds (numOfUsersToGenerate);

/** # 2 */
// generateClassesIds();
// generateTeachersIds();

/** # 3 */
// generateACalendarWeek();

/** #4 */
consolidateUserData()


