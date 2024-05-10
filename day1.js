    // cooding test day 1 
    // https://www.codewars.com/kata/57f780909f7e8e3183000078

    // manual version 
// const grow = (x) => {
//     let result = 1;
//     for(let i = 0; i < x.length;i++){
//         result = result * x[i];
//     }
//     return result;
// }

// console.log(grow([2, 2, 2, 2, 2, 2]))


    // higher order version 
const grow = (x) => {
    return result = x.reduce((acc,curr) => acc * curr)
}

console.log(grow([2, 2, 2, 2, 2, 2]))