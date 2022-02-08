var itemcount = 0;
var itemcountdisplay= document.querySelector('.items');
let atc = document.querySelectorAll('.add');
var cartitems = [0,0,0,0,0,0];

for(let i = 0; i <atc.length; i++){
  atc[i].addEventListener('click',function(){
     itemcount+=1;
     itemcountdisplay.innerHTML = `${itemcount}`
     cartitems[i] += 1;
  });
}

// atc.addEventListener('click',function(){
//   itemcount+=1;
//   itemcountdisplay.innerHTML = `${itemcount}`
// });

var checkout = document.querySelector('.cart');

function gotoCheckout(){
  if(itemcount > 0){
    sessionStorage.setItem('TheArray',JSON.stringify(cartitems))
    checkout.href = "checkout.html";
  }else{
    alert("Invalid number of products in cart");
  }
}
