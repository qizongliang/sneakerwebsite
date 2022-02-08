var sessionString = sessionStorage.getItem('TheArray');
var checkoutItems = JSON.parse(sessionString);


document.getElementById('yzdb').innerHTML = checkoutItems[0].toString();
document.getElementById('yzMXb').innerHTML = checkoutItems[1].toString();
document.getElementById('yzBt').innerHTML = checkoutItems[2].toString();
document.getElementById('ajdm').innerHTML = checkoutItems[3].toString();
document.getElementById('ajg').innerHTML = checkoutItems[4].toString();
document.getElementById('ajunc').innerHTML = checkoutItems[5].toString();

var price = (checkoutItems[0] * 300) +(checkoutItems[1] * 300)+(checkoutItems[2] * 320) +(checkoutItems[3] * 500)+ (checkoutItems[4] * 450)+(checkoutItems[5] * 400);

document.getElementById('sub-total').innerHTML = "Sub Total:$"+price.toString();
document.getElementById('taxes').innerHTML = "Taxes:$"+(Math.round(100*(price*0.04))/100).toString();
document.getElementById('total').innerHTML = 'Total:$'+(Math.round(100*(price*1.04))/100).toString();

var checkoutbtnjs = document.querySelector(".checkoutbtn");

checkoutbtnjs.addEventListener("click",function(){
  alert(`Successful checkout $${(Math.round(100*(price*1.04))/100)} spent!`)
});
