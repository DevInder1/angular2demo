import { Component, OnInit } from '@angular/core';
import {BookServiceService} from "../services/book-service.service";
import{NgForm} from "@angular/forms";
import {bookModel} from "../services/bookModel";
import {selectcomponent} from "../services/selectcomponent";

@Component({
  selector: 'app-book-upload',
  templateUrl: './book-upload.component.html',
  styleUrls: ['./book-upload.component.css']
})
export class BookUploadComponent implements OnInit {
  bookdetails: bookModel[];
  bookupload='falsebook';

  constructor(private bkservice:BookServiceService,private selectcom:selectcomponent) {

  }

  ngOnInit() {
  }
  onAddBook(form:NgForm)
  {
    const title=form.value.title;
    const author=form.value.author;
    const price=form.value.price;
    const image=form.value.imagepath;
    const bkobject=new bookModel(title,author,price,image);
    this.bkservice.addBook(bkobject);
  }
  onCilck(){
    this.bookupload='book';
    this.selectcom.selectcomponent.next(this.bookupload);
    console.log(this.bookupload);


  }
}
