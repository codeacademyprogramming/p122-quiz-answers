const answer3array = [5, 10, 12, 15];
const answer4array = [2, 4, 6, 8, 10];
const answer5array = ["", "hello", "world"];
const answer6array1 = [2, 4, 6];
const answer6array2 = [1, 3, 5];

const answer1 = [5, 6, 7, 8].map(element => element % 2);
const answer2 = [5, 6, 7, 8].filter(element => !(element % 2));
const answer3 = answer3array.find(element => element === 10);
const answer4 = answer4array.reduce((acc, value) => acc + value, 0);
const answer5 = answer5array.every(element => element);
const answer6 = answer6array1.concat(answer6array2).sort();
const answer7 = "       Hello world        ".trimEnd();
const answer8 = "Hello world".toLowerCase();
const answer9 = "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";
const answer10 = "Hello from another world".split('').reverse().join('');