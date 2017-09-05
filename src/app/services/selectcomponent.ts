import {Subject} from "rxjs/Subject";
import {EventEmitter} from "@angular/core";
/**
 * Created by Isingh on 9/1/2017.
 */
export class selectcomponent{

 // public selectcomponent=new Subject();
  addnewcom=new EventEmitter<any>();
  comparry=[];

  addcomponet(value:any)
  {
    this.comparry.push(value);
    this.addnewcom.emit(this.comparry.slice());
  }
  removecom()
  {
    this.comparry.splice(0,1)
    this.addnewcom.emit(this.comparry.slice());
  }
}
