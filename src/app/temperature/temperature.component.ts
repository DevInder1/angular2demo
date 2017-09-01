import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {
  speed: any = 10;
  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    myNumbers.subscribe(
      (number: number) => {
        this.speed = number * Math.random();
      }
    )
  }

}
