import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PublishingHouse} from "../model/publishing-house";

@Injectable({
  providedIn: 'root'
})
export class PubHouseService {

  baseUrl = 'http://localhost:8080/pub_house'

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<PublishingHouse[]> {
    return this.http.get<PublishingHouse[]>(`${this.baseUrl}/all`);
  }

  getById(id: number): Observable<PublishingHouse>{
    return this.http.get<PublishingHouse>(`${this.baseUrl}/${id}`)
  }
}
