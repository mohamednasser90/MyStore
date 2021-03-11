import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  keyparams!:string;
  productdata={
    image:'',
    title:'',
    desc:''
  }
  constructor(private parms:ActivatedRoute,private fs:AngularFirestore) {
    this.parms.params.subscribe(result=>{
      console.log(result);
      this.keyparams=result.id;
    })
   }

  ngOnInit(): void {
    this.fs.collection('products').ref.doc(this.keyparams).get().then(data=>{
      console.log(data.data());
     // this.productdata=data.data();
     let d:any=data.data();
     this.productdata.image=d['image'];
     this.productdata.title=d['title'];
     this.productdata.desc=d['description'];
    })
  }

}
