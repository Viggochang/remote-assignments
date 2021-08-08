/* 
Complete the function below to calculate the average price of all the products.
*/

function avg(data) {
    // your code here
    var size = data.size;
    var products = data.products;
    var sum = 0;
    for (let i = 0; i < size; i++) {
        sum += products[i].price;
    }
    return sum / size;
}

console.log(
    avg({
        size: 3,
        products: [
            {
                name: "Product 1",
                price: 100
            }, {
                name: "Product 2",
                price: 700
            }, {
                name: "Product 3",
                price: 250
            }
        ]
    })
); // show the average price of all products

