/**
 * Created by Isingh on 8/29/2017.
 */
export class bookModel{
  public title:string;
  public author:string;
  public price:number;
  public image:string;

  constructor(title:string,author:string,price:number,image:string)
  {
    this.title=title;
    this.author=author;
    this.price=price;
    this.image=image;
  }
}
