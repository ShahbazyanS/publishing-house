import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/user"

  constructor(private httpClient: HttpClient) { }

  createUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/add`, user)
  }

  getUser(email: string): Observable<User>{
    return this.httpClient.get<User>(`${this.baseUrl}/email/${email}`)
  }

  getUserById(id: number): Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/${id}`)
  }
}
