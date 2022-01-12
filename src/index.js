module.exports = function reverse (n) {
    let processedNumber;
    (n < 0) ? processedNumber = -n : processedNumber = n;

    let reversedProcessedNumber = String(processedNumber).split('').reverse().join('');

    return Number(reversedProcessedNumber);
}