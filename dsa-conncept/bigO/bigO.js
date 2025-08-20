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
