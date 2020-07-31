import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_TOKEN } from './token';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(
    private http: HttpClient,
    private api: string
  ) { }
  getFood(): Observable<any> {
    return this.http.get('http://localhost:3000'+this.api);
  }
}
