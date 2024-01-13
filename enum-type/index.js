// enum is used to store constants
// enum number type
var numberType;
(function (numberType) {
    numberType[numberType["number1"] = 5] = "number1";
    numberType[numberType["number2"] = 7] = "number2";
    numberType[numberType["number3"] = 8] = "number3";
})(numberType || (numberType = {}));
// console.log(numberType);
console.log(numberType.number1);
// enum string type
var stringType;
(function (stringType) {
    stringType["name1"] = "name 1 ";
    stringType["name2"] = "name 2";
    stringType["name3"] = "name 3 ";
})(stringType || (stringType = {}));
// console.log(stringType);
console.log(stringType.name2);
// enum hetero genous
var heterogenousType;
(function (heterogenousType) {
    heterogenousType["mix1"] = "mix 1 ";
    heterogenousType["mix2"] = "mix 2 ";
    heterogenousType[heterogenousType["uid1"] = 4] = "uid1";
    heterogenousType[heterogenousType["uid2"] = 6] = "uid2";
})(heterogenousType || (heterogenousType = {}));
console.log(heterogenousType);
