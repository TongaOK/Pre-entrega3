export default class UserDTO {
  constructor(user) {
    this._id = user._id;
    this.fullname = `${user.first_name} ${user.last_name}`;
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
