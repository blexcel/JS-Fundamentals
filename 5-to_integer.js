let strNumber = process.argv[2];

let intNumber = Number(strNumber);

if (isNaN(intNumber)) {
    console.log("Not a number");
}
else {
    console.log(`My Number: ${parseInt(intNumber)}`);
}