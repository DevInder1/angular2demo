import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {selectcomponent} from "../services/selectcomponent";

@Component({
  selector: 'app-dashpanel',
  templateUrl: './dashpanel.component.html',
  styleUrls: ['./dashpanel.component.css']
})
export class DashpanelComponent implements OnInit {
windspeed;
dashpanel;
  constructor(private selectcom:selectcomponent) { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    myNumbers.subscribe(
      (number: number) => {
        this.windspeed = number * Math.random();
      }
    )

  }
  onCilck(){
    this.dashpanel='windspeed';
    this.selectcom.addcomponet(this.dashpanel);
    console.log(this.dashpanel);


  }

}
