import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AutoListItemModel} from '../models/autoListItem.model';
import {BookListItemModel} from '../models/bookListItem.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  BASE_URL = 'http://localhost:8080/books';

  constructor(private http: HttpClient) {
  }

  getAllBoook(): Observable<BookListItemModel[]> {
    return this.http.get<BookListItemModel[]>(this.BASE_URL);

  }

}
