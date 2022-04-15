import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  constructor() { }
 admins: Array<{username: string,password: string}> =[
   {username:'ahiba' , password:"0000"},
   {username:'coulibaly',password:"1234"},
   {username:'michel' , password:"1111"},
 ]
 
  logIn(username: string  , password: string) {
   for (let i = 0; i<this.admins.length; i++){
     if(this.admins[i].username == username &&  this.admins[i].password == password){
       this.loggedIn = true;
     }
     else{
       this.loggedIn = false;
     }
   }
  
  }

  logOut() {
    this.loggedIn = false;
  }

  isAdmin() {
    const isUserAdmin =  new Promise((resolve, reject) => {
      resolve(this.loggedIn);
    });

    return isUserAdmin;
    // return this.loggedIn;
  }
}

/*
  const admin = isAdmin(); // si on avait pas de promesse

  isAdmin().then((admin) => {
    console.log("Est un administrateur : " + admin);
  })
*/
