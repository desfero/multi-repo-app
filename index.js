const { add } = require('@desfero/multi-repo-core');

function sum(arr) {
    return arr.reduce(add)
}

console.log(sum([2, 3]));

