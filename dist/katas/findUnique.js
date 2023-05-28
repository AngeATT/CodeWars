//Find the unique number https://www.codewars.com/kata/585d7d5adb20cf33cb000235/typescript
function findUniq(arr) {
    // Do the magic
    let diff = 0;
    let mutliValue = arr[0];
    for (let index = 1; index < arr.length; index++) {
        if (mutliValue != arr[index]) {
            diff = index;
            break;
        }
    }
    if (mutliValue < arr.length - 1) {
        return arr[diff] == arr[arr.length - 1] ? mutliValue : arr[diff];
    }
    else {
        return arr[diff] == arr[1] ? mutliValue : arr[diff];
    }
}
console.log(findUniq([1, 1, 1, 2, 1, 1]));
//Correction : utilise find mon ami 
//# sourceMappingURL=findUnique.js.map