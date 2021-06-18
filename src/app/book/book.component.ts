import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../services/book.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  id: number;
  book: Book
  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.book = new Book();
    this.bookService.getById(this.id).subscribe(data=>{
      this.book = data
    })
  }

}
