import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  constructor() { }
 admins: Array<{username: string,password: string , isAdmin: Boolean}> =[
   {username:'ahiba' , password:"0000", isAdmin: true},
   {username:'coulibaly',password:"1234", isAdmin: false},
   {username:'michel' , password:"1111" , isAdmin:true},
 ]
 
  logIn(username: string  , password: string , isAdmin:boolean) {
  
   for (let i = 0; i<this.admins.length; i++){

     if(this.admins[i].username == username &&  this.admins[i].password == password && this.admins[i].isAdmin == isAdmin ){
       this.loggedIn = true;
       break;
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
