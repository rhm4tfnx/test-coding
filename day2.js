// const test = (n) => {
//     const rest = [];
//     for(let i = 1; i <= n ;i++){
//         rest.unshift(i)
//     }
//     return rest;
// }


// console.log(test(5));

// const reverseSeq = n => {
//   return Array(n).fill(0).map((e, i) => n - i );
// };

const reverseSeq = (n) => {
    const rest = [];
    for(let i = n;i >=1 ; i--){
        rest.push(i) 
    }
    return rest;
}

console.log(reverseSeq(5));