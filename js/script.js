let cart = [
    {
        id: 1,
        name: "ShabNut Cooking Oil",
        quantity:1,
        price: 10500,
        img: "../assets/features/ShabNut-Cooking-Oil.png",
        text: "Cold-pressed excellence — smooth, healthy, and full of natural flavour."
    },
    
    {
        id: 2,
        name: "ShabNut Skincare and Beauty Oil",
        quantity: 1,
        price: 13000,
        img: "../assets/features/ShabNut-SkinCare.png",
        text: "Silky smooth, deeply nourishing, beautifully natural."
    },
    {
        id: 3,
        name: "ShabNut Hairlove",
        quantity: 1,
        price: 15000,
        img: "../assets/features/ShabNut-hairlove.png",
        text:"Deep nourishment that reduces dryness and flakiness, leaving hair soft, strong, and radiant."
    },
    {
        id: 4,
        name: "ShabNut Crunchie",
        quantity: 1,
        price:5000,
        img: "../assets/features/ShabNut-Crunchie.png",
        text: "The perfect bite of joy — tasty, crunchy, and full of peanut goodness."
    },
    {
        id: 5,
        name: "ShabNut Spread",
        quantity: 1,
        price:8000,
        img: "../assets/features/ShabNut-spread.png",
        text: "Smooth, creamy, and made from 100% natural groundnuts"
    },
    {
        id: 6,
        name: "ShabNut-Classic-Roasted",
        quantity: 1,
        price: 5000,
        img: "../assets/features/ShabNut-Classic.png",
        text: "Purely roasted, locally sourced, and full of natural energy."
    },
    
    {
        id:7 ,
        name: "ShabNut Cooking Paste",
        quantity: 1,
        price: 12000,
        img: "../assets/features/ShabNut-cooking-Paste.png",
        text: "With Natural ingredients, thick and rich — the perfect base for flavourful meals."
    },

     {
        id:8 ,
        name: "ShabNut Essential Oils",
        quantity: 1,
        price: 5000,
        img: "../assets/features/ShabNut-essential-oils.png",
        text:"Naturally pure. Perfectly restorative."
    },
    {
        id:9,
        name: "ShabNut Household Oils",
        quantity: 1,
        price: 7000,
        img: "../assets/features/ShabNub-HouseHold-Oils.png",
        text: "Pure, natural care for your home — shine wood, soften leather, and prevent rust the gentle way."
    }
];

//storage to grants full details of which product is added or removed
let basket = JSON.parse(localStorage.getItem("data")) || [];

// function addToCart(item){
//     cart.push(item);
//     return cart;
// }

// function updateCartItem(id, newQuantity){
//     for(let i=0; i<cart.length; i++){
//         if (cart[i].id === id){
//             cart[i].quantity =newQuantity;
//             break;
//         }
//     }
//         return cart;
// }

// function removeItemFromCart(id){
//     for(let i=0; i<cart.length; i++){
//         if(cart[i].id === id){
//             cart.splice(i, 1);
//             break;
//         }
//     }
//     return cart;
// }

// function displayCart(){
//     for(let i=0; i<cart.length; i++){
//         let itemName = cart[i].name;
//         let itemQuantity= cart[i].quantity;
//         let itemPrice = cart[i].price;
//         console.log(`You selected [${itemQuantity}] ${itemName} which costs ₦${itemPrice}`);
//     }

// }

// function calculateTotal(){
//     let total = 0;
//     for(let i=0; i<cart.length; i++){
//         let itemTotal = (cart[i].quantity * cart[i].price).toFixed(2);
//         total +=itemTotal;
//     }
//         return total.toFixed(2);
// }
// console.log(`Total Payable Amount: ₦${calculateTotal()}`);


let featureSection = document.getElementById("features-section");

let displayFeatures =()=>{

    return (featureSection.innerHTML= cart.map(x=>{
        let {id, name, quantity, price, img, text} = x;
        let search = basket.find((x) => x.id === id) || [];
        return`
    <section id=product-id-${id} class="features-section" id="features-section" aria-label="products-list">
                        <article class="features-card" >
                            <figure >
                                <img class="card-image" src=${img} title="ShabNut Cooking Oil">
                                <figcaption class="card-text"> ${text} </figcaption>
                            </figure>
                            <h3 class="card-heading"> ${name}</h3>
                            <ul class="price-quantity">
                                <p class="card-price">₦ <span class="price">${price}</span> </p>
                                <ul class="card-buttons">
                                    <li>
                                        <img onclick="decrement(${id})" src="./assets/icons/dash-lg.svg">
                                    </li >
                                    <li id=${id} class="quantity">
                                        <p>
                                        ${search.item === undefined ? 0: search.item}
                                        </p>
                                    </li>
                                    <li>
                                        <img  onclick="increment(${id})" src="./assets/icons/plus-lg.svg">
                                    </li>
                                </ul>
                            </ul>
                        </article>
                    </section>`}).join(""));
}

displayFeatures();


// increment and decrement functionality
let increment = (id) => {
    
    let search = basket.find((x)=> x.id === id);
    if(search ===undefined){
        basket.push({
        id: id,
        item: 1
        })
    }else{
        search.item +=1;
    }
    // console.log(basket);
    update(id);
    localStorage.setItem("data", JSON.stringify(basket));   
   
};

let decrement = (id) => {
    
     let search = basket.find((x)=> x.id === id);
     if (search.item === 0) return;
     else if (search.item === 0 || search === undefined) return;
        search.item -=1;
         update(id);
        basket = basket.filter((x)=> x.item !==0);  
        // console.log(basket);
    localStorage.setItem("data", JSON.stringify(basket));  
};

// update function

let update = (id) => {
    let search = basket.find((x)=> x.id === id);
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculateItemNo()
};

// add cart items
let calculateItemNo = () => {
    let cartIcon = document.getElementById("cart-count")
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y)=>x+y, 0);
   
}

calculateItemNo();