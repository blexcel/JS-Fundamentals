let userArg = process.argv.slice(2);

let a = Number(userArg[0]);
let b = Number(userArg[1]);

function add(a, b) {
    if (isNaN(a) || isNaN(b)) {
        console.log("NaN");
    }
    else {
        console.log(a + b);
    }
}
add(a, b);