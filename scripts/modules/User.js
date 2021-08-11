function User(name="Unregistered User", gender="unknown", age="unknown", registered=false, req="unknown", userStatus="0") {
    this.userName = name;
    this.userGender = 9;
    this.userAge = 8;
    this.userCode = gender === "unknown" || age === "unknown" ? "unknown" : gender + age;
    this.registered = registered;
    this.userReq = req;
    this.userStatus = userStatus;
}

export { User }

















