const formatUser = (data) => {
    user = {
        id: data.id,
        firstName: data.first_name,
        lastName: data.last_name,
        username: data.username,
        email: data.email,
        phoneNumber: data.phone_number,
        password: data.password,
        dateOfBirth: data.date_of_birth,
    };

 return user;
}

module.exports = {
    formatUser
}