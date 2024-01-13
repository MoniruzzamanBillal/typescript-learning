// object type
let objectType: object;

objectType = {
  userRole: "noob ",
  roleId: 12,
};

console.log(objectType);

// array of object type
let usersObject: object[];

usersObject = [
  { userName1: "user name 1 ", userId: 12 },
  { userName2: "user name 2 ", userId: 14 },
];

console.log(usersObject);

usersObject.push(objectType);

console.log(usersObject);
