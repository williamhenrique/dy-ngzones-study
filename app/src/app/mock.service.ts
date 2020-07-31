import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  getFood(): Observable<any> {
    return of([
      { name: 'Pinga 51', price: 5 }
    ])
  }
}
