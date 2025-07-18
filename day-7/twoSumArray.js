// your are given two array and you have add same index Element from each array and return new arry

var addTwoNumbers = function(l1, l2) {
    let ans=[]
    for(let i=0;i<l1.length;i++){
        ans.push(l1[i]+l2[i])
    }
    return ans;
};


console.log(addTwoNumbers([1,2,3],[4,5,6])); // Output: [5, 7, 9]