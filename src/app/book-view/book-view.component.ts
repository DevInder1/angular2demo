import { Component, OnInit } from '@angular/core';
import {BookServiceService} from "../services/book-service.service";
import {bookModel} from "../services/bookModel";
import {selectbookservice} from "../services/selectbookservice";
import {selectcomponent} from "../services/selectcomponent";


@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
  bookview: bookModel[];
  title="book";
  data:string;
  bookupload=true;

  constructor(private bookservice:BookServiceService,private selectserv:selectbookservice,private selectcom:selectcomponent) {
    this.bookview=this.bookservice.getBookDetails();
    this.bookservice.addbookchanged.subscribe((bookview:bookModel[])=>
    {
      this.bookview=bookview;
    });

    this.selectserv.selectvalue.subscribe((data:string)=>
    {
      this.data=data;
      console.log(this.data)
    })
    /*this.selectcom.selectcomponent.subscribe((data:boolean)=>
    {
      this.bookupload=data;
      console.log('routing'+"  "+ this.bookupload);
    })*/
  }

  ngOnInit() {
  }

}
