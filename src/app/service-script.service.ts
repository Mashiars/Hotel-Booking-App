import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ServiceScriptService {
  bookings={};
  payment={};
  combined=[]
    combinedz=[];
    imgs= {};
    text= {};
    category = {}


    idEdit = "";
    categ={};
    valueEdit = {};
    img="";
    arrImg:any = []


 constructor() { }
  makeBooking(obj){
        this.bookings=(obj)
          obj="";
  }
  makePayment(obj){
   this.payment=(obj)
          obj="";
   console.log(this.payment)
 }
  

  getBookings(){
   this.combined.push(Object.assign(this.payment,this.bookings));
   return this.combined;
  }
   cancel(){
     /*
  var i = this.combined.length-1;
  this.combined[i] 
  --i;
   return this.combined;*/
  }

/***********************************ADMIN SECTION********************************************/
newItemDB(imgs:{},text:{},category:{}){
  this.combinedz.push(Object.assign(imgs,text,category)) 
  console.log(this.combinedz)

    return this.combinedz;
}
getCombinedz(){
  
}

   editItemDB(id,categId,value,img){

    this.idEdit = id;
    this.categ = categId;
    this.valueEdit = value;
    this.img = img;
  
      for(let x = 0;x<=this.combinedz.length-1;x++){
        if(this.combinedz[this.idEdit]==this.combinedz[x])
         {
           this.combinedz[x]=Object.assign({url:this.img },{item:this.valueEdit},{cotegory:this.categ})
           this.img=""
         }
        console.log( this.combinedz[x])  }
   }



  removeItemDB(removeID){
    
  
    for(let k = 0;k<=this.combinedz.length-1;k++){
      if(this.combinedz[removeID]==this.combinedz[k]){
         let temp = this.combinedz[k];
         this.combinedz[temp] = this.combinedz[k+1];
         this.combinedz[k] = this.combinedz[temp];
         -- this.combinedz.length
      }
    }
  }


  removeImageDB(removeID){
    
    for(let k = 0;k<=this.arrImg.length-1;k++){
      if(this.arrImg[removeID]==this.arrImg[k]){
         let temp = this.arrImg[k];
         this.arrImg[temp] = this.arrImg[k+1];
         this.arrImg[k] = this.arrImg[temp];
         -- this.arrImg.length
      }
    }
  }

getImageCatagoriy(){
  return this.combinedz;
}





}