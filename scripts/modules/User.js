export {User}

function User(name, gender, age, registered, req, userStatus) {
    this.userName = name;
    this.userGender = gender;
    this.userAge = age;
    this.userReq = req;
    this.userCode = gender + age;
    this.userStatus = null;
    this.registered = false;

    return {
        user: User
    }
}


















