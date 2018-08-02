import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {
  commodityType: string;
  comodityWeight: string;
  comodityValue: string;
  vehicleType: string;
  pickupDate: string;
  pickupLocation: string;
  contactsName: string;
  contactsNumber: string;
  receiverName: string;
  receiverNumber: string;
  dropoffLocation: string;
  info: string;
  button: HTMLButtonElement;

  constructor(private db: AngularFireDatabase, private router: Router) { }

  ngOnInit() {
    this.button = document.getElementById('payStackButton') as HTMLButtonElement;
  }

  bookTruck() {
    const promiseOp = this.db.list('user/cargo owner/').push({
      'commodityType': this.commodityType,
      'comodityWeight': this.comodityWeight,
      'comodityValue': this.comodityValue,
      'vehicleType': this.vehicleType,
      'pickupDate': this.pickupDate,
      'pickupLocation': this.pickupLocation,
      'contactsName': this.contactsName,
      'contactsNumber': this.contactsNumber,
      'receiverName': this.receiverName,
      'receiverNumber': this.receiverNumber,
      'dropoffLocation': this.dropoffLocation,
      'info': this.info

    });
    promiseOp.then((response) => console.log(response));
    this.button.click();
  }
}
