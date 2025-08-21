const itemData = ["milk", "bread", "bicut", "cookie"]

// O(n) time, O(1) space
const findItem = (itemData, itemName) => {
    itemData.forEach((item, idx) => {
        if (itemName === item) {
            console.log(`found ${itemName} at index ${idx}`)
        }
    })
}

findItem(itemData, "cookie")



// O(1) time, O(1) space
const getItem = (itemData, itemIdx) => {
    console.log(`item at ${itemIdx} is ${itemData[itemIdx]}`);
}

getItem(itemData, 3)



// O(n^2),o(1) space

const shoeData = [1, 1, 2, 3, 3, 4, 4]

const findPair = (data) => {
    for (let i = 0; i < data.length; i++){
        for (let j = i+1; j < data.length; j++) { 

            if (data[i] == data[j]) {
                console.log(`pair of shoe ${data[i]} at index ${i},${j}`)
            }

        }
    }
}

findPair(shoeData)



// O(log n) 