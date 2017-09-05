import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {selectcomponent} from "../services/selectcomponent";

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {
  speed: any = 10;
  temperature;
  constructor(private selectcom:selectcomponent) { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    myNumbers.subscribe(
      (number: number) => {
        this.speed = number * Math.random();
      }
    )
  }
  onCilck(){
    this.temperature='temperature';
    this.selectcom.addcomponet(this.temperature);
    console.log(this.temperature);


  }

}
