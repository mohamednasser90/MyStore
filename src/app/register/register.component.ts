import { Router } from '@angular/router';
import {AuthService} from './../services/auth.service';
import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {BinaryOperatorExpr} from '@angular/compiler';

@Component({selector: 'app-register', templateUrl: './register.component.html', styleUrls: ['./register.component.css']})
export class RegisterComponent implements OnInit {

    constructor(private authServ : AuthService, private fs : AngularFirestore,private router:Router) {}

    ngOnInit(): void {}

    register(f : any) { // console.table(f.value);
        let data = f.value;
        this.authServ.SignUp(data.email, data.password).then((user) => {
            let Uid:string|undefined=user.user?.uid
            if(Uid)
            {
                localStorage.setItem("userConnect",Uid)
            }
            this.fs.collection("users").doc(user.user ?. uid).set({
              fname: data.fname,
               bio: data.bio,
                email: data.email,
              uid:user.user?.uid,
              image:'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg'
              }).then(() => {
                   this.router.navigate(['/']);
                })
        }).catch(() => {
            console.log("error !");
        })
    }

}
