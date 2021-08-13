import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Book} from "../model/book";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl = 'http://localhost:8080/book'

  constructor(private http: HttpClient) {
  }

  getLastBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/last9`)
  }

  searchBook(word: string): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.baseUrl}/search/${word}`)
  }

  getById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/${id}`)
  }

  addBook(book: Book)
    : Observable<Book> {
    return this.http.post<Book>(`${this.baseUrl}`, book)
  }
}
