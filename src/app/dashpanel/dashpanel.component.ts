import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-dashpanel',
  templateUrl: './dashpanel.component.html',
  styleUrls: ['./dashpanel.component.css']
})
export class DashpanelComponent implements OnInit {
windspeed;
  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    myNumbers.subscribe(
      (number: number) => {
        this.windspeed = number * Math.random();
      }
    )

  }

}
