import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsService } from '../shared/assignments.service';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private authService:AuthService,private assignmentsService:AssignmentsService ,private router:Router) { }

  ngOnInit(): void {
  }
  login() {
    if(!this.authService.loggedIn) {
      // this.authService.logIn();
    } else {
      this.authService.logOut();
      this.router.navigate(["/home"]);
    }
  }
  peuplerBD() {
    this.assignmentsService.peuplerBDAvecForkJoin()
    .subscribe(() => {
      console.log("TOUS LES AJOUTS ONT ETE REALISES");
      // on peut alors afficher la liste
      this.router.navigate(["/home"]);
    })
  }

}
