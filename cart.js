alert("Hello");
let carts = document.querySelectorAll('.btn-add');
    let products =[
        {
            name:' Summer T-shirt 2021',
            tag:' SummerT-shirt2021',
            price:'20',
            inCart:0
        },
        {
            name:'La Casa De Papel',
            tag:'LaCasaDePapel',
            price:'25',
            inCart:0
        },
        {
            name:'Spring T-shirt 2021',
            tag:'SpringT-shirt2021',
            price:'20',
            inCart:0
        },
        {
            name:'Winter Long Dress',
            tag:'WinterLongDress',
            price:'30',
            inCart:0
        },
        {
            name:'Summer Dress',
            tag:'SummerDress',
            price:'23',
            inCart:0
        },
        {
            name:'Orange T-shirt',
            tag:'OrangeT-shirt',
            price:'20',
            inCart:0 
        },
        {
            name:'Winter Long Dres',
            tag:'WinterLongDres',
            price:'25',
            inCart:0
        },
        {
            name:'Summer Dresss',
            tag:'SummerDress',
            price:'23',
            inCart:0
        },
        {
            name:'Orange T-shirt',
            tag:'OrangeT-shirt',
            price:'20',
            inCart:0
        },
        {
            name:'Winter Long Dress',
            tag:'WinterLongDress',
            price:'25',
            inCart:0
        },
        {
            name:'Cartoon White T-shirt',
            tag:'CartoonWhiteT-shirt',
            price:'20',
            inCart:0
        },
        {
            name:'Marvel White T-Shirt Avengers 2021',
            tag:'MarvelWhiteT-ShirtAvengers2021',
            price:'20',
            inCart:0
        },
        {
            name:'Spring Thin Checked Jacket',
            tag:'SpringThinCheckedJacket',
            price:'30',
            inCart:0
        },
        {
            name:'Winter Coat For Women 2020',
            tag:'WinterCoatForWomen2020',
            price:'30',
            inCart:0
        },
        {
            name:'Ladies Blouses Tshirt 2020',
            tag:'LadiesBlousesTshirt2020',
            price:'28',
            inCart:0
        },
        {
            name:'Ladies Casual Black Button Blouse',
            tag:'LadiesCasualBlackButtonBlouse',
            price:'18',
            inCart:0
        },
        {
            name:'Winter Green Coat Jackets 2021',
            tag:'WinterGreenCoatJackets2021',
            price:'30',
            inCart:0
        },
        {
            name:'Spring Loose Blouse Women',
            tag:'SpringLooseBlouseWomen',
            price:'25',
            inCart:0
        },
        {
            name:'Summer Women Long Dress 2021 ',
            tag:'SummerWomenLongDress2021 ',
            price:'22',
            inCart:0
        }

    ];
for (let i=0;i <carts.length;i++)
{
    carts[i].addEventListener('click', ()=> {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}
function OnloadCartNumbers()
{
    let productNumbers=localStorage.getItem('cartNumbers');
    if (productNumbers)
    {
        document.querySelector('.cart  .counter').textContent=productNumbers;
    }
}
function cartNumbers(product)
{
    let productNumbers=localStorage.getItem('cartNumbers');

    productNumbers=parseInt(productNumbers);
    if (productNumbers)
   {
    localStorage.setItem('cartNumbers',productNumbers + 1);
    document.querySelector('.cart  .counter').textContent=productNumbers+1;
   }
   else {
    localStorage.setItem('cartNumbers',1);
    document.querySelector('.cart  .counter').textContent=1;
   }
   setItems(product);
}
function setItems(product)
{
    let cartItems=localStorage.getItem('productsInCart');
    cartItems=JSON.parse(cartItems);
    if(cartItems !=null)
    {
    if (cartItems[product.tag]==undefined){
        cartItems={
            ...cartItems,
            [product.tag]:product
        }
    }

        cartItems[product.tag].inCart+=1;
    }
    else {
 product.inCart=1;
    cartItems={
        [product.tag]:product  
    }
    }
   
    localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}
function totalCost(product)
 {
//console.log("The price is ",product.price);
let cartCost=localStorage.getItem('totalCost');

console.log("My cartCost is",cartCost);
console.log(typeof cartCost);

if (cartCost != null)
{
cartCost=parseInt(cartCost);
localStorage.setItem("totalCost",cartCost +
product.price);
} 
else {
    localStorage.setItem("totalCost",product.price);
}
 }
OnloadCartNumbers();
