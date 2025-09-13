let firstArgument = process.argv[2];
let secondArgument = process.argv[3];

const countOne = parseInt(firstArgument);
const countTwo = parseInt(secondArgument);

const sum= function(countOne, countTwo) {
    return countOne + countTwo;
}

console.log(sum(countOne, countTwo));
