import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AutoListItemModel} from '../models/autoListItem.model';
import {AutoDetailsToClientModelModel} from '../models/autoDetailsToClientModel.model';


@Injectable({
  providedIn: 'root'
})
export class AutoService {


  BASE_URL = 'http://localhost:8080/autos';

  constructor(private http: HttpClient) {
  }

  getAllAutos(): Observable<AutoListItemModel[]> {
    return this.http.get<AutoListItemModel[]>(this.BASE_URL);

  }

  getAuto(id: number): Observable<AutoDetailsToClientModelModel> {
    return this.http.get<AutoDetailsToClientModelModel>(`${this.BASE_URL}/${id}`);
    // return this.http.get<MovieDetailsModel>(this.BASE_URL + '/' + id);  // ugyanaz, csak más szintaxis
  }

  // még szürke...
  deleteAuto(id: number) {
    return this.http.delete(`${this.BASE_URL}/${id}`);
  }


}
