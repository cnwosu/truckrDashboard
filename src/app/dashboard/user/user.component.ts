import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as firebase from 'firebase';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title = 'My first AGM project';
  lat = 6.2235263;
  lng = -0.5892302;

  currLat = 5.645922;
  currLong = -0.160008;

  constructor() { }

   ngOnInit() {
  //   // let loggedInUser;
  //   // Ensure only signed in users access this page
  //   // Check for already signed in user
  //   firebase.auth().onAuthStateChanged(function (user) {
  //     if (user) {
  //       console.log(user);
  //       // User is authenticated
  //     } else {
  //       window.location.href = `${environment.corporateSiteUrl}`;
  //     }
  //   });
   }

  // // signout method
  // signOut(): void {
  //   firebase.auth().signOut().then(function() {
  //     window.location.href = `${environment.corporateSiteUrl}`;
  //   });
  // }

  // // Temporary isVerified Method
  // isVerified(): Boolean {
  //   return false;
  // }
}
// @TODO: Create a service that takes user data and checks if they're verified so the service can be called both on 
// signin page and user dashboard page.
