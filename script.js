var products = [
    {name: "Study chair",head_line:"Give comfort to your bump",price:"6000", image: "https://plus.unsplash.com/premium_photo-1681412205603-435e7c4b89ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name: "Mid town chair",head_line:"It will give you bump ",price:"6001", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoYWlyfGVufDB8fDB8fHww" },
    {name: "Wooden chair",head_line:"Give comfort to your bump",price:"6002", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyfGVufDB8fDB8fHww" }
    
];

var popular_products = [
    {name: "Study chair",head_line:"Give comfort to your bump",price:"6000", image: "https://plus.unsplash.com/premium_photo-1681412205603-435e7c4b89ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D"},
    {name: "Mid town chair",head_line:"It will give you bump ",price:"6001", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoYWlyfGVufDB8fDB8fHww" },
    {name: "Wooden chair",head_line:"Give comfort to your bump",price:"6002", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyfGVufDB8fDB8fHww" }
    
];

var cart=[];

function show_products(){
    let clutter="";
    products.forEach(function(obj,index){
        clutter+=`<div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
           <img class="h-full w-full object-cover"src="${obj.image}">
        </div>
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">${obj.name}</h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                    <h3 class="font-semibold opacity-20">${obj.head_line}</h3>
                    <h4 class="font-semibold mt-2">&#8377; ${obj.price}</h4>
                </div>
                <button data-index="${index}" class=" add w-10 h-10 rounded-full shader text-yellow-400">
                <i data-index="${index}" class=" add ri-add-line"></i></button>
            </div>
        </div>
    </div>`;
    })

    document.querySelector(".products").innerHTML=clutter;
}

function show_popular_products(){
    let clutter="";
    popular_products.forEach(function(obj){
        clutter+=`<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${obj.image}"
                alt="">
        </div>
        <div class="data py-2 w-full overflow-hidden">
            <h1 class="leading-none font-semibold">${obj.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${obj.head_line}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${obj.price}</h4>
        </div>
    </div>`;
    })
    document.querySelector(".populars").innerHTML=clutter;
}

function addToCart(){
    document.querySelector(".products").addEventListener("click",function(details){
        if(details.target.classList.contains('add')){
            cart.push(products[details.target.dataset.index])
            console.log(cart);
        }
    })
}

function showCart(){
    document.querySelector(".carticon").addEventListener("click",function(){
        document.querySelector(".cartexpnd").style.display="block";

        let clutter="";
    cart.forEach(function(val){
        clutter+=`<div class="flex gap-2 bg-white p-2 rounded-lg">
        <div class="w-10 h-10 flex-shrink-0 rounded-lg bg-red-500 overflow-hidden">
           <img class"h-full w-full object-cover" src="${val.image}">
        </div> 
       <div>
          <h3 class="font-semibold">${val.name}</h3>
          <h5 class="text-sm font-semibold opacity-80">&#8377; ${val.price}</h5>
       </div>
    </div>`
    })
    document.querySelector(".cartexpnd").innerHTML=clutter;
 })
    
    
}
show_products();
show_popular_products();
addToCart();
showCart();

