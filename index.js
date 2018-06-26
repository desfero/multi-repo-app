const { add } = require('multi-repo-example-1');

function sum(arr) {
    return arr.reduce(add)
}

console.log(sum([2, 3]));

