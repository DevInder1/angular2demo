import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { BookViewComponent } from './book-view/book-view.component';
import { BookUploadComponent } from './book-upload/book-upload.component';
import {RoutingConfigModule} from "./routing-config/routing-config.module";
import {BookServiceService} from "./services/book-service.service";
import {selectbookservice} from "./services/selectbookservice";
import {filterpipe} from "./app-header/shared/pipes/filterpipe";
import { DashpanelComponent } from './dashpanel/dashpanel.component';
import {RetailersComponent} from "./retailers/retailers.component";
import { TemperatureComponent } from './temperature/temperature.component';
import {selectcomponent} from "./services/selectcomponent";
import {selectheader} from "./services/selectheader";


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    BookViewComponent,
    BookUploadComponent,
    filterpipe,
    DashpanelComponent,
    TemperatureComponent,
    RetailersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   //RoutingConfigModule
  ],
  providers: [BookServiceService,selectbookservice,selectcomponent,selectheader],
  bootstrap: [AppComponent/*BookUploadComponent,TemperatureComponent,DashpanelComponent*/]
})
export class AppModule { }
