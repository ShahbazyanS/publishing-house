import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Author} from "@app/model/author";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  baseUrl = 'http://localhost:8080/author'

  constructor(private http: HttpClient) { }

  addAuthor(author: Author): Observable<Author>{
    return this.http.post<Author>(`${this.baseUrl}`, author);
  }

  findAll(): Observable<Author[]>{
    return this.http.get<Author[]>(`${this.baseUrl}/all`);
  }
}
