
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// noinspection ES6UnusedImports
import { } from '@types/googlemaps';

const CronJob = require('cron').CronJob;

@Component({
  selector: 'app-root',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild('mapContainer') mapContainer: any;
  map: google.maps.Map;

  private loginEndPoint = 'http://api.amber360.com/api/user/login';
  private deviceListEndPoint = 'http://api.amber360.com/api/device/listdevice';
  private coordinatesEndPoint = 'http://api.amber360.com/api/location/tracking';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  private lat;
  private lng;
  private directionsService: any;
  private directionsDisplay: google.maps.DirectionsRenderer;
  private deviceID: any;
  private accessToken: any;
  private userID: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

    this.initializeMap();
    this.loginAmber();
    localStorage.setItem('locations', JSON.stringify([]));
    this.runCron();

  }

  private getDeviceList(userID, accessToken) {
    const body = `{"id":"${userID}", "type":"0", "pageNo":"1", "pageCount":"100", "loginType":"0", "mapType":"google",
    "lastTime":"2017-01-09T12:01:05.9776787 08:00", "token":"${accessToken}", "language":"en-us", "appId":"6"}`;
    this.http.post(this.deviceListEndPoint, body, this.httpOptions)
      .subscribe(response => {
        this.deviceID = response['Items'][8]['Id'];
        this.getCoordinates(this.deviceID, this.accessToken);
      });
  }

  private getCoordinates(deviceID, accessToken) {
    const body = `{"deviceId":"${deviceID}", "mapType":"google", "token":"${accessToken}", "language":"en-us", "appId":"6"}`;
    this.http.post(this.coordinatesEndPoint, body, this.httpOptions)
      .subscribe(response => {
        this.lat = response['Item']['Latitude'];
        this.lng = response['Item']['Longitude'];
        this.plotRoute();
        //  insert into firebase
      });
  }

  private initializeMap() {
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    const accra = new google.maps.LatLng(5.6037, -0.180);
    const mapProp = {
      center: accra,
      zoom: 14
    };
    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapProp);
    this.directionsDisplay.setMap(this.map);
  }

  private plotRoute() {
    const startingPoint = new google.maps.LatLng(5.5480, -0.1927);
    const currentLocation = new google.maps.LatLng(this.lat, this.lng);
    const requestOption = {
      origin: startingPoint,
      destination: currentLocation,
      travelMode: 'DRIVING'
    };
    this.directionsService.route(requestOption, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      }
    });

  }

  private loginAmber() {
    const body = '{"name":"Adam123", "pass":"Muhideen@1adam", "appId":"6", "language":"en-us","loginType":"0"}';
    this.http.post(this.loginEndPoint, body, this.httpOptions)
      .subscribe(response => {
        this.accessToken = response['AccessToken'];
        this.userID = response['Item']['UserId'];
        this.getDeviceList(this.userID, this.accessToken);
      });
  }

  private runCron() {
    const cron = new CronJob('30 * * * * *', () => {
      this.getCoordinates(this.deviceID, this.accessToken);
      console.log('Location updated...');
    }, null, true, 'America/Los_Angeles');
  }
}
