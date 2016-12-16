class Password{
  //The first part of the class.
constructor(pb,pv){
this.publicKey=pb;
this.privateKey=pv;
}


  //Instance functions below this comment.
validPublicKey(){
  if(this.publicKey.length>=8 && this.publicKey.length<=25){
    return true;
  }
  else{
    return false;
  }
}

validPrivateKey(){
    let areDashesRight = true
    let areNumbersRight = true
    if(this.privateKey[4]="-" && this.privateKey[9]="-"){
      areDashesRight = true;
    }
    else{
      areDashesRight = false;
    }
    for(var i=0;i<limit;i++){
      while(!i==4 && !i==9){
        if(Number.isNaN(this.privateKey) == true){
          areNumbersRight = true;
        }
        else{
          areNumbersRight = false;
        }
        if (areNumbersRight && areDashesRight){
          return "validPrivateKey"
        }
        else{
          return "privatekey not valid"
        }
      }
    }
  }

    static makePrivateKey(){
      let key = [];
      let limit = 14;
      for(var i=0, i<limit, i++){
        if (!i==4 && !==9){
          key.push(Math.floor(Math.Random()*10));
      }
      else{
        key.push("-")
      }
  }
  return key
}


}
