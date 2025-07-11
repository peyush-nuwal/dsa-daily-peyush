 
const findMN = (arr) => {
    const n = arr.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, curr) => acc + curr, 0);
    return expectedSum - actualSum;
}
const findAllMissingBrute = (arr ) => {
    const missing = [];
    const n = Math.max(...arr);
    for (let i = 0; i <= n; i++) {
        if (!arr.includes(i)) {
            missing.push(i);
        }
    }
    return missing;
};
console.log("missing",findMN([3,0,1,4]))
console.log("missing", findAllMissingBrute([3,0,1,4]))