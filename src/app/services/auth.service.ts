import { AngularFireAuth} from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:AngularFireAuth) { }


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
