let userArg = process.argv[2];

let x = Number(userArg);

if (isNaN(x)) {
    console.log("Missing size");
}
else {
    for (let i = 0; i < x; i++) {
        console.log("X".repeat(x));
    }
}