import {AuthService} from './../services/auth.service';
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.css']})
export class LoginComponent implements OnInit {
errorMessage:string=""
    constructor(private auth : AuthService,private router:Router) {}

    ngOnInit(): void {}
    login(f : any) {
        let data = f.value;
        this.auth.SignIn(data.email, data.password).then(() => {
            console.log("Login Success");
           this.router.navigate(['/']);
        }).catch(() => {
            console.log("Login Failed");
            this.errorMessage="Incorrect email & password"
        })

    }

}

