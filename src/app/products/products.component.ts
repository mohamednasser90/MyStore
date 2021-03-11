import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { firestore } from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Uid:any

  dataArray: any=[];
  successMesssage:string=""
    constructor(private fs:AngularFirestore,private auth:AuthService,private route:Router) { 
       this.auth.user.subscribe(user=>{
        this.Uid=user?.uid;
  
  });
    }
  
     ngOnInit(): void {
      this.fs.collection("products").snapshotChanges().subscribe((data)=>{
        this.dataArray=data.map(c=>{
         return{
           id:c.payload.doc.id,
           data: c.payload.doc.data()
        
         }
         console.log(c.payload.doc.data());
        //'this.dataArray.push(c.payload.doc.data()) 
       // console.log(c.payload.doc.data());
       })
      //  .map((prod:any)=>{
      //      return {
      //       id:prod.payload.doc.id,
      //        title:prod.payload.doc.data()['title'],
      //        description:prod.payload.doc.date()['description'],
      //       image:prod.payload.doc.date()['image'],
      //        uid:prod.payload.doc.date()['uid']
      //      }
      //    })
       })
  
  
      

}
Detail(id:any)
{
  this.route.navigate(['/products/'+id]);
  console.log(id);
}
}
