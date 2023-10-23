// Problem 1
function sumOfDistinctElements(set1, set2) {
    let distinct = new Set([...set1, ...set2]);
    let sum = 0;
    for (let element of distinctElements) {
        sum += element;
    }
    return sum;
}
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = sumOfDistinctElements(set1, set2);
console.log("Output:", result);






//Problem 2
function dotProduct(v1, v2) {
    return null;
}
let result = 0;
for (let i = 0; i < v1.length; i++) {
    result += v1[i] * v2[i];
}
return result;

function areVectorsOrthogonal(vectors) {
    const n = vectors.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const result = dotProduct(vectors[i], vectors[j]);

            if (result === 0) {
                console.log('Vectors ${i + 1} and $ {j + 1} are orthogonal.')
            } else {
                console.log('Vectors ${i + 1} and $ {j + 1} are not orthogonal.')
            }
        }
    }
}

const vectors = [
    [i, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 0]
]
areVectorsOrthogonal(vectors);


