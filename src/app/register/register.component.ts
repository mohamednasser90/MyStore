import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authServ:AuthService) { }

  ngOnInit(): void {
  }

  register(f:any){
    //console.table(f.value);
    let data=f.value;
    this.authServ.SignUp(data.email,data.password).then(()=>{
       console.log('Sueecess !');
    }).catch(()=>{
       console.log("error !");
    })
  }

}
