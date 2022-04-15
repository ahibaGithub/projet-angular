import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'; 
import { AuthService } from 'src/app/shared/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  //username = "";
  // password="";
    verification : boolean = true;
    log : boolean = false;
  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });
  constructor( private AuthService:AuthService,private router:Router) { }

  ngOnInit(): void {
   
  }
  get username() { return this.loginForm.get('username'); }

  get password() { return this.loginForm.get('password'); }
  onSubmit() {
     if (this.loginForm.valid == true){
       const usernames = this.loginForm.get('username')?.value;
       const passwords = this.loginForm.get('password')?.value;
       this.AuthService.logIn(usernames,passwords)
       if(this.AuthService.loggedIn == true){
         this.log =true;
       
        this.router.navigate(["/home"]);
       }
       else{
          this.verification = false;
     
       }
       

     }
  } 
}
