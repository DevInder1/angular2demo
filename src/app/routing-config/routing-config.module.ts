import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import {BookUploadComponent}  from '../book-upload/book-upload.component';
import{BookViewComponent} from '../book-view/book-view.component';
import {TemperatureComponent} from "../temperature/temperature.component";
import {DashpanelComponent} from "../dashpanel/dashpanel.component";
import{selectcomponent} from'../services/selectcomponent';
import { NavigationStart } from '@angular/router';
import construct = Reflect.construct;
import {RetailersComponent} from "../retailers/retailers.component";



/*const com=this.bookupload === 'book' ? BookUploadComponent:RetailersComponent;*/
//const com=bookuplad==='book1'?:BookViewComponent;
const appRoutes: Routes = [
  {path: '', redirectTo: '/view', pathMatch: 'full'},
  {path: 'view', component: BookViewComponent},
 {path: 'upload', component: BookUploadComponent},
  {path:'temperature',component:TemperatureComponent},
  {path:'windspeed',component:DashpanelComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingConfigModule {
  public bookupload;

  constructor(private selectcom:selectcomponent){
    this.selectcom.addnewcom.subscribe((data:string)=>
    {
      this.bookupload=data;
      console.log('routing'+" "+this.bookupload);
    })


  }
  ngOnInit(

  ) {
    console.log(this.bookupload);


  }
}
