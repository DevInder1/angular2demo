import { Component, OnInit } from '@angular/core';
import {selectbookservice} from "../services/selectbookservice";

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  public  values = ["2 states", "love story","girl of death ","Digital"];

  constructor(private selectval:selectbookservice) {

  }

  ngOnInit() {
  }

  onchange(value:string){
    console.log(value);
    this.selectval.selectvalue.next(value);
  }

}
