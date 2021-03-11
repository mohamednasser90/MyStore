// import { AngularFireAuth} from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import firebase from 'firebase';
import{AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

user:Observable<firebase.User | null | undefined>;
  constructor(private auth:AngularFireAuth) {
    this.user=this.auth.user;
   }


  SignUp(email:string,password:string)
  {
     return this.auth.createUserWithEmailAndPassword(email,password);
  }
  SignIn(email:string,password:string)
  {
    return this.auth.signInWithEmailAndPassword(email,password);
  }
  Logout()
  {
    return this.auth.signOut();
  }
}
