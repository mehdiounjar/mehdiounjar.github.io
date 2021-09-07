var a;
function g1()
{
    document.getElementById("group1").style.display="inline";
    document.getElementById("cart").style.display="inline";

    if(a==1)
    {
       document.getElementById("group1").style.display="inline";
       
       return a=0; 
    }
    else
    {
        document.getElementById("group2").style.display="none";
        document.getElementById("group3").style.display="none";
        return a=1; 
  }
}
var b;
function g2()
{
    document.getElementById("group2").style.display="inline";
    if(b==1)
    {
       document.getElementById("group2").style.display="inline";
       return b=0; 
    }
    else

    {
        document.getElementById("group1").style.display="none";
        document.getElementById("group3").style.display="none";
        return b=1; 
    }
}
var c;
function g3()
{
    document.getElementById("group3").style.display="inline";
    if(c==1)
    {
       document.getElementById("group3").style.display="inline";
       return c=0; 
    }
    else
    {
        document.getElementById("group2").style.display="none";
        document.getElementById("group1").style.display="none";
        return c=1; 
    }
}

function show_btn()
{
    show=document.querySelector('.show');
    show.addEventListener('click',()=> {
        document.getElementById("products-container").style.display="inline";
    })
}





















/*

var additemid=0;
function addtocart(item)
{
    additemid+=1;
     var selecteditem=document.createElement('div');
     selecteditem.classList.add('cartImg');
     selecteditem.setAttribute.add('id',additemid);
     var img=document.createElement('img');
     onmessage.setAttribute('src',item.children[0].currentSrc);
     var cartitems=document.getElementById('title');
     selecteditem.append(img);
     cartitems.append(selecteditem);
}

*/



/*
let btn =document.querySelector('button');
let div =document.querySelector('div');

btn.addEventListener('click',() =>
{
    if(div.style.display==='none')
    {
        div.style.display='block';
    }
    else{
        div.style.display='none';
    }
})



<script>
        const button = document.getElementById("cart-btn");
        const cart = document.getElementById('cart')
        let i = 1;
        button.addEventListener("click", () => {
            cart.innerText = i++;
        })
    </script>
<button id="cart-btn" class="button">Add to cart</button>










    function add()
{
    var li=document.createElement("div");
    var input=document.getElementById("input").value;
    var text=document.createTextNode(input);
    li.appendChild(text);
    document.getElementById("myliste").appendChild(li);
}
*/