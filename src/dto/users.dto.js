export default class userDto {
    constructor(user){
        this._id = user._id;
        this.first_name = user.first_name;
        this.email = user.email;
        this.role = user.role;
    }
}

/*

_id
6554d0f6b598b7498c6c37a4
first_name
"Admin"
last_name
"Coder"
email
"adminCoder@coder.com"
age
99
password
"adminCod3r123"
role
"user"*/