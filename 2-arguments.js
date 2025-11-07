let userArg = process.argv.slice(2);

if (userArg.length === 0) {
    console.log("No argument");
}
else if (userArg.length === 1) {
    console.log("Argument found");
}
else {
    console.log("Arguments found");
}