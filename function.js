let items = ["Mangoes","Oranges","Tomatoes","Passion","Onions","Bananas"];
let quantity = [200,100,50,40,95,24];
console.log(items);
console.log(quantity)
//Write a function to add a new item to the inventory, updating both arrays.

function addNewItems(item,quantity){
    for(let i= 0;i<=items.length || i<=quantity.length;i++);
    console.log("stock");
}
items.push("Carrots");
quantity.push(40);
console.log(items);
console.log(quantity);

let items2={}
items.forEach((key,value) => {
    items2[key]=quantity[value]
});
console.log(items2);


//Write a function to update the stock quantity of an existing item.
function updateStock(){
    items2.mangoes = 250;
}
updateStock()
console.log(items2);


//Write a function to calculate the total number of items in the inventory.
let result = 0;
function calculateTotal(){
    let total = Object.values(items2);
    let sumValues = total.reduce((x,y)=>x+y,result);
    console.log(sumValues);
}
calculateTotal();
  

//Write a function to find the item with the lowest stock quantity.
function findLowest(_lowest){
    let smallest = 0;
    for(let i=0;i<=items.length;i++);
    if(items[i]<smallest){
        smallest = items[i];
        console.log(smallest);
    }
}
findLowest();
















