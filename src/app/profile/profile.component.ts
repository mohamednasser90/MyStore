import {AuthService} from './../services/auth.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {stringify} from '@angular/compiler/src/util';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Subscription } from 'rxjs';

@Component({selector: 'app-profile', templateUrl: './profile.component.html', styleUrls: ['./profile.component.css']})
export class ProfileComponent implements OnInit,OnDestroy {
    Uid : string | undefined 
    successMesssage:string=""
    dataProfile = {
        fname: '',
        bio: '',
        email: '',
        image: '',
        uid: ''

    }
    task!:AngularFireUploadTask
    persentage:any
    ref!:AngularFireStorageReference
    userSub:Subscription
    constructor(private auth : AuthService, private fs : AngularFirestore ,private fst:AngularFireStorage) {
        this.userSub=this.auth.user.subscribe(user => {
            this.Uid = user ?. uid;
        })
    }
    // localStorage.getItem("userConnect")
    ngOnInit(): void {
        let ls = localStorage.getItem("userConnect")!
        this.fs.collection("users").ref.doc(ls).get().then((data) => {
            console.log(data.data())
            let userdata:any=data.data();
            this.dataProfile.fname = userdata.fname;
            this.dataProfile.bio = userdata.bio;
            this.dataProfile.email = userdata.email;
            this.dataProfile.image = userdata.image;
            this.dataProfile.uid = localStorage.getItem("userConnect")!;


        })
    }

    Update(){
      this.fs.collection("users").doc(this.dataProfile.uid).update({
        fname :this.dataProfile.fname,
        bio : this.dataProfile.bio
      }).then(()=>{
this.successMesssage="Updated !"
      })
    }

    uploadImage(event:any)
    {
        const id=Math.random().toString(36).substring(2);
        console.log(id);
        console.log(Math.random().toString(36));
        this.ref=this.fst.ref(id);
        this.task=this.ref.put(event.target.files[0]);
        this.persentage=this.task.percentageChanges()
        this.task.then((data)=>{
            data.ref.getDownloadURL().then(url=>{
                this.fs.collection("users").doc(this.dataProfile.uid).update({
                    image:url
                })
            })
        })
    }
   
ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.userSub.unsubscribe();
}
}
