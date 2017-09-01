import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {delay} from "rxjs/operator/delay";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Component({
  selector: 'app-retailers',
  templateUrl: './retailers.component.html',
  styleUrls: ['./retailers.component.css']
})
export class RetailersComponent implements OnInit {
  @ViewChild('f') component: ElementRef;

  constructor() {
  }

  data = [];
  speed: any = 10;

  ngOnInit() {

    const myNumbers = Observable.interval(1000);
    myNumbers.subscribe(
      (number: number) => {
        this.speed = number * Math.random();
      }
    )
  }

  Ondestroy(objectdata: HTMLInputElement) {
    console.log(this.component);
    console.log(this.component.nativeElement.value);

  }

  Dynamic() {


  }
}
