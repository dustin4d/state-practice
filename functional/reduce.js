// reduce is the multi-tool of js functions
// reduce can be used if no other list transformation will work

const orders = [
    {amount: 250},
    {amount: 400},
    {amount: 100},
    {amount: 325}
]

// iteration 1: sum = 0, order = 250
// iteration 2: sum = 250, order = 400
// iteration 3: sum = 650, order = 100
// iteration 4: sum = 750, order = 325
const totalAmount = orders.reduce(
    (acc, order) => acc + order.amount, 0
)

/* FOR COMPARISON
var totalAmount = 0
for (var i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amount
}
*/

console.log(totalAmount)