import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../model/book";
import {BookService} from "../services/book.service";
import {Router} from "@angular/router";
import {User} from "@app/model/user";
import {UserType} from "@app/model/user-type";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() user: User
  books: Book[];
  word: string


  constructor(private bookService: BookService, private router: Router) {
  }

  ngOnInit(): void {
    this.getBooks()
  }

  bookDetails(id: number) {
    this.router.navigate(['book', id])
  }

  searchBook() {
    this.bookService.searchBook(this.word).subscribe(data => {
        this.books = data
        console.log(data);
      },
    )
  }

  private getBooks() {
    this.bookService.getLastBooks().subscribe(data => {
      this.books = data;
    })
  }
}
