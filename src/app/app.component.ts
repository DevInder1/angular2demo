import {Component} from '@angular/core';
import {selectcomponent} from "./services/selectcomponent";
import {selectheader} from "./services/selectheader";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature;
  bookview;
  bookupload;
  temperature;
  windspeed;
  header;
  selcomp = [];
  title = 'app works!';

  constructor(private selectcomp: selectcomponent, private selecthead: selectheader) {
    this.selectcomp.addnewcom.subscribe((data: any) => {
      this.selcomp = data;
      console.log('routing in app' + "  " + this.selcomp);
      console.log(this.selcomp.length);
    })
    this.selecthead.selectheader.subscribe((data: string) => {
      this.header = data;
      console.log('header' + this.header)
      //this.loadedFeature=data;
      for (let i = 0; i < this.selcomp.length; i++) {
        if (this.selcomp[i]===this.header) {
         // this.bookview=true;
          this.loadedFeature=this.header;
         this.loadedFeature=this.header;
          this.selectcomp.removecom();

        }
      }
    })

  }

  ngOnInit() {
 // this.loadedFeature=true;
 /*this.loadedFeature='bookview';
  this.loadedFeature='bookupload';
  this.loadedFeature='temperature';
  this.loadedFeature='windspeed';*/
 /*this.bookview=true;
 this.bookupload=true;
 this.windspeed=true;
 this.temperature=true;*/
  }



}
