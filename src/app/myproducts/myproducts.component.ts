import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { AuthService } from './../services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { firestore } from 'firebase';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css']
})
export class MyproductsComponent implements OnInit,OnDestroy {
Uid:any

dataArray: any=[];
successMesssage:string=""
userSub:Subscription
  constructor(private fs:AngularFirestore,private auth:AuthService) { 
    this.userSub= this.auth.user.subscribe(user=>{
      this.Uid=user?.uid;

});
  }

  // ngOnInit(): void {
  //   this.fs.collection("products").snapshotChanges().subscribe((data)=>{
  //   //  data.MAP(C=>{
  //   //   THIS.DATAARRAY.PUSH(C.PAYLOAD.DOC.DATA()) 
  //   //   CONSOLE.LOG(C.PAYLOAD.DOC.DATA());
  //   //  })
  //   this.dataArray= data.map((prod:any)=>{
  //      return {
  //       id:prod.payload.doc.id,
  //       title:prod.payload.doc.data()['title'],
  //       description:prod.payload.doc.data()['description'],
  //       image:prod.payload.doc.data()['image'],
  //       uid:prod.payload.doc.data()['uid']
  //    }
  //    })
  //    })


  // }
  //  }

  //  ngOnInit(): void {
  //    this.fs.collection("products").valueChanges().subscribe((data)=>{
  //     this.dataArray=data
  //     })
  //   }
 
 
     
  //  }

  ngOnInit(): void {
    this.fs.collection("products").valueChanges({ idField: 'id' }).subscribe((data)=>{
     this.dataArray=data
     })
  }


   
  

  addproduct(f:any)
  {
    let data=f.value;
    console.log(this.Uid);
    // this.fs.collection("products").doc(this.Uid).set({  Update Existing product by doc id =Uid
      this.fs.collection("products").add({
      title:data.title,
      description:data.description,
      uid:this.Uid,
      image:data.image
    }).then(()=>
    {
     this.successMesssage="Added !";
    }).catch(()=>{
      this.successMesssage="Error !";
    })

  }
  delete(id:any)
  {
    console.log(id);
      this.fs.collection("products").doc(id).delete()
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.userSub.unsubscribe();
  }
}
