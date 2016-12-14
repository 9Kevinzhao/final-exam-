class Cart{
  //What is the first part of every class? Type it below.
constructor(itemList,quantity){
 itemList =[];
 quantity = [];
 this.itemList=itemList
 this.quantity=quantity
}


  //Type the instance functions below this comment.
function cartTotal(){
  let total=0
  for(var i=0;i<quantity.length;i++){
    total += this.quantity[i]*this.itemList[i]
  }
  return total
}

function addItem(I,Q){
  this.itemList.push(I)
  this.quantity.push(Q)
}

function subCart(day){
  let subArray =[]
  if (Item.shippingTime == day){
    subArray.push(Item.name);
  }
  return subArray;
}

function delivery()
let earliest = itemList[0].shippingTime
let lastest = itemList[0].shippingTime
for (var i=0, i<itemList.length; i++){
  if
}
}
