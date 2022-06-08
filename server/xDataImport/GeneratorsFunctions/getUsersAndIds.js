// const fetch = require("node-fetch");
const fsPromises = require('fs').promises;
const path = require('path');

const {formatUser} = require(path.join(__dirname, '../', '/utils', 'utils_formating.js'))


const getUser = async () => {

    url = "https://random-data-api.com/api/users/random_user";

        try{
            const response = await fetch(url)
            .then(res => res.json())
            .then(data => {
                return data;
            })
            return response;
        }
        catch (err){
            console.log(err);
        }
};

const generateUsers = async (number) => {
    let arrUsers = [];
    let usersId = []
    
    for (let i = number ; i > 0 ; --i) {
        let user = await getUser();
        arrUsers.push(formatUser(user));
        usersId.push(user.id)
    }
    return {users:arrUsers, ids:usersId};
}

const generateUsersFragmentsAndIds = async (numOfUsers) => {
    
    const data = await generateUsers(numOfUsers);

    await fsPromises.writeFile(path.join(__dirname,'../','/data', '/generatedFragments','generatedUsersPartials.json'), JSON.stringify(data.users), "utf-8", err => {
        if (err) {
            console.error(err);
        }    
    });
    await fsPromises.writeFile(path.join(__dirname,'../','/data', '/generatedFragments', 'usersId.json'), JSON.stringify(data.ids), "utf-8", err => {
        if (err) {
            console.error(err);
        }    
    });

    console.log("done generating users and users ids");
}

module.exports = {
    generateUsersFragmentsAndIds
}