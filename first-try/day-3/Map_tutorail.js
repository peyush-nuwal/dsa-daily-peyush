
//  create a map and adding data to it
// const map = new Map()

// map.set("name","peyush")
// map.set("age",19)
// map.set("gender", "wallmart bag")

// map.forEach((value, key) => {
//     console.log(key,value);
// })


// quesstion 1 email grouping
// const users = [
//     { name: "Alice", email: "alice@gmail.com" },
//     { name: "Bob", email: "bob@yahoo.com" },
//     { name: "Alice", email: "alice@protonmail.com" },
//     { name: "Charlie", email: "charlie@hotmail.com" },
//     { name: "Bob", email: "bob@gmail.com" },
// ];
  

// const userMap = new Map()


// for (let user of users) {
//     if (!userMap.has(user.name)) {
//         userMap.set(user.name,[])
//     }
    
//     userMap.get(user.name).push(user.email)
    
// }


// userMap.forEach((email, name) => {
//      console.log(name,email);
// })








// question:2 frequncy of CharacterData

// const input = "javascript is supercool";

// const characterMap = new Map()

// let temp = input.split("")

// for (let word of temp) {
//     if (word === " ") continue;

//     if (characterMap.has(word)) {
//         characterMap.set(word, characterMap.get(word) + 1)
//     }
//     else {
//         characterMap.set(word, 1)
        
        
//     }
// }


// characterMap.forEach((fre, word) => {
//     console.log(word, fre);
//      })





// question :3 count the frequncy of word

const input = "coding is fun and coding is powerful and fun is life";
const wordMap= new Map()
const temp = input.split(" ")

for (let word of temp) {
    if (wordMap.has(word)) {
         wordMap.set(word,wordMap.get(word)+1)
    }
    else {
        wordMap.set(word,1)
    }
}
const sorted = Array.from(wordMap.entries()).sort((a, b) => {
    a[0].localeCompare(b[0])
})

sorted.sort().forEach(([word, count]) => {
       
     console.log(word,count)
});