import { Injectable, Inject } from '@angular/core';
import { STOCK_STORE_CONFIG, StockStoreConfig } from './config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(
    private http: HttpClient,
    @Inject(STOCK_STORE_CONFIG) private config: StockStoreConfig
  ) {
    console.log('teste');
    console.log(this.config);
  }

  getStock(): Observable<[{stock: string}]>{
    return this.http.get<[{stock: string}]>('http://localhost:3000/stock');
  }
}
