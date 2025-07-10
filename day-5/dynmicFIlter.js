// day - 5 problem solving 
// problem 1 : filter data from the array 

const products = [
    { name: "Nike Air Max", category: "Shoes", price: 2999 },
    { name: "Adidas Runner", category: "Shoes", price: 2499 },
    { name: "Levi's Jeans", category: "Clothing", price: 1899 },
    { name: "H&M T-Shirt", category: "Clothing", price: 799 },
    { name: "Noise Smartwatch", category: "Electronics", price: 3499 },
    { name: "Boat Earbuds", category: "Electronics", price: 1299 },
    { name: "Zara Hoodie", category: "Clothing", price: 2299 },
    { name: "Puma Slides", category: "Shoes", price: 999 },
];
const filters = {
    category: ["Clothing", "Electronics"],
    priceRange: [1000, 3000],
  };

const filterData = (data, filters)=>{
    let stack = []
    
    for (let item of data) {
        const inCategory = filters.category.includes(item.category);
        const inPrice = filters.priceRange[0] <= item.price && filters.priceRange[1] >= item.price
       
        if (inCategory && inPrice) {
       
             stack.push(item)
        }
         
    }
    return stack
}

console.log("filtered",filterData(products,filters));