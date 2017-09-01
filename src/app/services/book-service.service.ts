import {EventEmitter, Injectable} from '@angular/core';
import {bookModel} from "./bookModel";
import  {Http} from "@angular/http";

@Injectable()
export class BookServiceService {

  addbookchanged = new EventEmitter<bookModel[]>();

  private bookdetails: bookModel[] = [
    new bookModel('2 states', 'chetan bhagath', 500, 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/2_States_-_The_Story_Of_My_Marriage.jpg/220px-2_States_-_The_Story_Of_My_Marriage.jpg'),
    new bookModel('love story', 'olivia', 2500, 'https://cdn.thisiswhyimbroke.com/images/our-love-story-book-300x250.jpg'),
    new bookModel('girl of death', 'Erin', 700, 'https://1.bp.blogspot.com/-sWh6rOEXa4A/TileNey0MZI/AAAAAAAACME/ZPEfyF3lpjw/s1600/Anime+fallen+angel+girl+2.jpg'),
    new bookModel('Digital', 'SCOTT KELBY', 1500, 'https://is1-ssl.mzstatic.com/image/thumb/Publication/v4/c8/8b/44/c88b44f8-0679-2f70-b508-4f2fa68d51ec/source/1200x630bb.jpg')

  ];

  constructor(private http: Http)
  {

}

getBookDetails()
{
  return this.bookdetails.slice();
}
addBook(bookdetails
:
bookModel
)
{
  this.bookdetails.push(bookdetails);
  this.addbookchanged.emit(this.bookdetails.slice());
}
}
