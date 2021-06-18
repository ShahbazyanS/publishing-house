import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {BookService} from "../services/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.getBooks()
  }

  bookDetails(id: number){
    this.router.navigate(['book', id])
  }

  private getBooks(){
    this.bookService.getLastBooks().subscribe(data =>{
      this.books = data;
    })
  }
}
