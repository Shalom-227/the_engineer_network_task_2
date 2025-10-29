let cart = [
    {
        id: 1,
        name: "ShabNut Cooking Oil",
        quantity:1,
        price: 10500
    },
    
    {
        id: 2,
        name: "ShabNut Skincare and Beauty Oil",
        quantity: 1,
        price: 50000
    },
    {
        id: 3,
        name: "ShabNut Hairlove",
        quantity: 1,
        price: 15000
    },
    {
        id: 4,
        name: "ShabNut Crunchie",
        quantity: 1,
        price:5000
    },
    {
        id: 5,
        name: "ShabNut Spread",
        quantity: 1,
        price:8000
    },
    {
        id: 6,
        name: "ShabNut Classic Roasted",
        quantity: 1,
        price: 5000
    },
    
    {
        id:7 ,
        name: "ShabNut Cooking Paste",
        quantity: 1,
        price: 12000
    },

     {
        id:8 ,
        name: "ShabNut Essential Oils",
        quantity: 1,
        price: 5000
    },
    {
        id:9,
        name: "ShabNut Household Oils",
        quantity: 1,
        price: 7000
    }
];

function addToCart(item){
    cart.push(item);
    return cart;
}

function updateCartItem(id, newQuantity){
    for(let i=0; i<cart.length; i++){
        if (cart[i].id === id){
            cart[i].quantity =newQuantity;
            break;
        }
    }
        return cart;
}

function removeItemFromCart(id){
    for(let i=0; i<cart.length; i++){
        if(cart[i].id === id){
            cart.splice(i, 1);
            break;
        }
    }
    return cart;
}

function displayCart(){
    for(let i=0; i<cart.length; i++){
        let itemName = cart[i].name;
        let itemQuantity= cart[i].quantity;
        let itemPrice = cart[i].price;
        console.log(`You selected [${itemQuantity}] ${itemName} which costs ₦${itemPrice}`);
    }

}

function calculateTotal(){
    let total = 0;
    for(let i=0; i<cart.length; i++){
        let itemTotal = (cart[i].quantity * cart[i].price).toFixed(2);
        total +=itemTotal;
    }
        return total.toFixed(2);
}
console.log(`Total Payable Amount: ₦${calculateTotal()}`);