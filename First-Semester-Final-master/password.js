class Password{
  //The first part of the class.
constructor(pb,pv){
this.publicKey=pb;
this.privateKey=pv;
}


  //Instance functions below this comment.
validPublicKey(){
  if(this.publicKey.length>=8 && this.publicKey.length<=25){
    return "true"
  }
  else{
    return "false"
  }
}

validPrivateKey(){
    if(this.privateKey[4]="-" && this.privateKey[9]="-"){
      return "dashes are right"
    }
    else{
      return "dashes are not right"
    }
    for(var i=0;i<14;i++){
      while (!i==4 && !==9){
        if(this.privateKey.charCodeAt(i)>=48 && this.privateKey.charCodeAt(i)<=57){
          return "password are numbers"
        }
        else {
          return "password are not numbers"
        }
      }
    }

    static makePrivateKey(){
      let password = " ";
      for(var i=0, i<14, i++){
        if (!i==4 && !==9){
          password.push(Math.floor(Math.Random()*10));
      }
      else{
        password.push("-")
      }
  }
  return passowrd
}


  //Static function below this comment.
}
