/*function add(...values){
    const totalSum = values.reduce((sum, value) => sum + value);
    console.log(totalSum);
}
add(5,6,7,8,9,5)*/


function add(...values) {
  const orderValue = values.reduce((totalSum, item) => {
    const qty = cart[item.id];
    if (qty) {
      const total = item.price * qty;
      console.log(`Name: ${item.name}, Price: ${item.price}, Qty: ${qty}, Total: ${total}`);
      return totalSum + total;
    }
    return totalSum;
  }, 0);

  console.log("Order Value:", orderValue);
}

const items = [
  { id: 1, name: "p1", price: 40 },
  { id: 2, name: "p2", price: 50 },
  { id: 3, name: "p3", price: 90}
];

const cart = { 1: 4, 3: 5 };

add(...items); 