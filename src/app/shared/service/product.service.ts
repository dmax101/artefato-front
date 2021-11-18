import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Product } from '../model/product.model';
import { Purchase } from '../model/purchase.model';
import { PurchaseResponse } from '../model/purchaseResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = `${environment.API}/product`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * getAllProducts
   */
  public getAllProducts(): Observable<Product[]> {
    
    return this.httpClient.get<Product[]>(this.apiUrl)
  }

  /**
   * getProductById
   */
  public getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiUrl}/${id}`)
  }

  /**
   * purchaseProduct
   */
  public purchaseProduct(purchase: Purchase): Observable<PurchaseResponse> {
    return this.httpClient.post<PurchaseResponse>(`${this.apiUrl}/purchase`, purchase, this.httpOptions)
  }
}
