let uniNumber: string | number | boolean;

uniNumber = 5;

console.log(uniNumber);
uniNumber = "this is string ";

console.log(uniNumber);

function displayNum(num: string | number) {
  console.log("in function = ", num);
}

displayNum(55);
displayNum("string number ");
