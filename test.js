
// function one() {
//     return new Promise((resolve, reject) => {
//         console.log("one");
//         resolve();

//     });
// }
// function two() {
//     return new Promise((resolve, reject) => {
//         console.log("two");
//         resolve();
//     });
// }

// async function three() {
//     await one().then(() => { setTimeout(() => { console.log("first"); }, 1000) });;
//     two().then(() => { console.log("second") });
//     return 0;

// }
// three().then(() => { console.log("done") });
// three().then(console.log("done")); //then doest wait for the promise to get resolved..its the fn ref inside then which wauts for the fn to get resolved
// one().then(() => { setTimeout(() => { console.log("first"); }, 4000) });
// two().then(() => { console.log("second") });


function one() {
    return new Promise((resolve, reject) => {
        console.log("one");
        resolve();

    });
}
function two() {
    return new Promise((resolve, reject) => {
        console.log("two");
        resolve();
    });
}

async function three() {
    let one1 = await one();
    console.log(one1);
    return 0;

}
three().then(() => { console.log("done") });