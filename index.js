// Problem 1:
// Complexity: Low

// You are given two strings.
// First string is large text. For example
// "It is a long established fact that reader will be distracted by readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and webpage editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many websites still in their infancy."

// Second string is a single word. For example "is"

// You will need to write a program that will remove all occurrences of the second string from the first string.

// Note: You will need to do this with pure for/while loops. Do not use any external functions like substring.

var str1 = "It is a long established fact that reader will be distracted by readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and webpage editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many websites still in their infancy.";

var str2 = "is";
 var str3 = str1.split(str2);
console.log(str3.join(""));


// Complexity: Medium

// You have been given a set of integers. You need to write a program that will divide a set in two subsets of n/2 sizes each such that the difference of the sum of two subsets is as minimum as possible.

// Note: n is even, hence sizes of two subsets must be strictly n/2.

// For example, 

// Input =  {3, 4, 5, 3, 100, 1, 83, 54, 23, 20}
// Output = {4, 100, 1, 23, 20} and {3, 5, 3, 83, 54}.
// Also print the sum of each set.


// Both output subsets are of size 5 and sum of elements in both subsets is same (148 and 148).

var minimumDifference = function(nums) {
    nums = permutation(nums, nums.length);
    var final = [];
    var store = [];
    for (let i = 0; i <= nums.length - 1; i++) {
        var arr = createtwoarrays(nums[i])
        var arr1 = arr[0];
        var arr2 = arr[1];
        var sum1 = sumArray(arr1);
        var sum2 = sumArray(arr2);
        var diffe = diff(sum1, sum2);
        store.push({"diff":diffe,"arr":[arr1,arr2]})
        final.push(diffe);
    }
    result = [];
    var min = Math.min(...final);
    store.map((el)=>{
        if(el.diff == min){
            result = el.arr;
        }
    })
    console.log(result); 
    return min
}



var result = [];
function permutation(arr, currentSize) {

    arr = arr.map((i) => Number(i));

    if (currentSize == 1) { // recursion base-case (end)
        result.push(arr.join(','));
        return;
    }

    for (let i = 0; i < currentSize; i++) {
        permutation(arr, currentSize - 1);
        if (currentSize % 2 == 1) {
            let temp = arr[0];
            arr[0] = arr[currentSize - 1];
            arr[currentSize - 1] = temp;
        } else {
            let temp = arr[i];
            arr[i] = arr[currentSize - 1];
            arr[currentSize - 1] = temp;
        }
    }
    return result;
}
function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
function diff(arr1, arr2) {

    var diffbetween2 = arr1 - arr2;
    if (diffbetween2 < 0) {
        return diffbetween2 * -1

    }

    return diffbetween2;

}
function createtwoarrays(nums) {

    nums = nums.split`,`.map(x => +x)

    var mid = (nums.length / 2) - 1;
    var arr1 = [];
    var arr2 = [];

    for (let i = 0; i <= mid; i++) {
        arr1.push(nums[i]);

    }
    for (let i = nums.length - 1; i > mid; i--) {

        arr2.push(nums[i]);

    }
    // console.log(arr1, arr2);
    return [arr1, arr2];
}