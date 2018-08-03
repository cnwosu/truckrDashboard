import { Component, OnInit } from '@angular/core';
import { environment, firebaseConfig } from '../../environments/environment.prod';
import * as firebase from 'firebase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  signOut(): void {
    firebase.auth().signOut().then(function () {
      // window.location.href = `${firebaseConfig.corporateSiteUrl}`;
      this.route.navigate(['/']);
    });
  }
}
