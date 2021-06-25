import {Component, Input, OnInit} from '@angular/core';
import {BookService} from "../services/book.service";
import {Book} from "../model/book";
import {Genre} from "../model/genre";
import {AuthorService} from "@app/services/author.service";
import {Author} from "@app/model/author";
import {PublishingHouse} from "@app/model/publishing-house";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  // @Input() publishingHouse1: PublishingHouse;
  @Input() publishingHouse1: number;
  book: Book = new Book();
  authors: Author[];
  genres: any[] = [];

  constructor(private authorService: AuthorService, private bookService: BookService) { }

  ngOnInit(): void {
    for (let genre in Genre) {
      if (!isNaN(Number(genre))) {
        this.genres.push({text: genre, value: Genre[genre]})
      }
    }
    this.allAuthors()
  }

  allAuthors(){
    this.authorService.findAll().subscribe(data=>{
      this.authors = data;
    })
  }

  saveBook(){
    // this.book.publishingHouse = this.publishingHouse1;
    this.bookService.addBook(this.book).subscribe(data=>{
        console.log(data);
      },
      error => console.log(error))
    }

    onSubmit(){
    this.saveBook()
    }
}
