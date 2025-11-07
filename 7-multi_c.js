let userLang = process.argv[2];

let args = Number(userLang);

if (isNaN(args)) {
    console.log("Missing number of occurrences");
}
else {
    for (let i = 0; i < args; i++) {
        console.log("C is fun");
    }
}