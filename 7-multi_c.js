let userLang = process.argv[2];

let x = Number(userLang);

if (isNaN(x)) {
    console.log("Missing number of occurrences");
}
else {
    for (let i = 0; i < x; i++) {
        console.log("C is fun");
    }
}