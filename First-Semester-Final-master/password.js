class Password{
  //The first part of the class.
constructor(pb,pv{
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
      let password = abcd-efgh-ijkl;
      a=(Math.Random*10).floor;
      b=(Math.Random*10).floor;
      c=(Math.Random*10).floor;
      d=(Math.Random*10).floor;
      e=(Math.Random*10).floor;
      f=(Math.Random*10).floor;
      g=(Math.Random*10).floor;
      h=(Math.Random*10).floor;
      i=(Math.Random*10).floor;
      j=(Math.Random*10).floor;
      k=(Math.Random*10).floor;
      l=(Math.Random*10).floor;


    }
}


  //Static function below this comment.
}
