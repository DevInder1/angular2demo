import { Component, OnInit } from '@angular/core';
import {selectbookservice} from "../services/selectbookservice";
import {selectcomponent} from "../services/selectcomponent";
import {selectheader} from "../services/selectheader";

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  public  values = ["2 states", "love story","girl of death ","Digital"];

  constructor(private selectval:selectbookservice,private selectcom:selectcomponent,private selecthead:selectheader) {

  }

  ngOnInit() {
  }

  onchange(value:string){
    console.log("header"+value);
    this.selectval.selectvalue.next(value);
  }
  onchangeall(value:string)
  {
    this.selecthead.selectheader.next(value)
    console.log("component value"+value)
  }

}
