// Takes an integer, returns boolean

function isPalindrome(num) {
    const reversed = parseFloat(num.toString().split('').reverse().join(''));
    if (num == reversed) {
        return true;
    } else {
        return false;
    }
}

const testNum = 123;
console.log(isPalindrome(testNum));