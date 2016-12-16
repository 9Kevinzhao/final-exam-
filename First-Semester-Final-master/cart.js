class Cart{
  //What is the first part of every class? Type it below.
constructor(itemList,quantity){
 itemList =[];
 quantity = [];
 this.itemList=itemList
 this.quantity=quantity
}


  //Type the instance functions below this comment.
function totalCart(){
  let total=0
  for(var i=0;i<quantity.length;i++){
    total += this.quantity[i]*this.itemList[i]
  }
  return total
}

function addItem(i,q){
  this.itemList.push(i)
  this.quantity.push(q)
}

function subCart(day){
  let subArray =[]
  if (Item.shippingTime == day){
    subArray.push(Item.name);
  }
  return subArray;
}



}
