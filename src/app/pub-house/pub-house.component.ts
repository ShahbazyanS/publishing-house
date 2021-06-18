import {Component, OnInit} from '@angular/core';
import {PubHouseService} from "../services/pub-house.service";
import {PublishingHouse} from "../model/publishing-house";
import {BookService} from "../services/book.service";
import {Book} from "../model/book";
import {Genre} from "../model/genre";

@Component({
  selector: 'app-pub-house',
  templateUrl: './pub-house.component.html',
  styleUrls: ['./pub-house.component.css']
})
export class PubHouseComponent implements OnInit {

  id: number;
  book: Book = new Book();
  pubHouse: PublishingHouse = new PublishingHouse();
  genres: any[] = [];

  constructor(private bookService: BookService, private pubHouseService: PubHouseService) {
  }

  ngOnInit(): void {
    for (let genre in Genre){
      if (isNaN(Number(genre))){
      this.genres.push({genre: genre, value: Genre[genre]})
    }
    }
    this.getById()
  }

  getById() {
    this.pubHouseService.getById(this.id).subscribe(data => {
      this.pubHouse = data;
    })
  }

  addBook() {
    this.bookService.addBook(this.book).subscribe(data=>{
      console.log(data);
    },
    error => console.log(error))
  }

  onSubmit(){
    this.addBook();
  }
}
