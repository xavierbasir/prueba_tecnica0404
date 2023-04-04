import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductRestService {
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/products');
  }

  getProduct(id): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/products/' + id);
  }

  editProduct(id): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/products/' + id);
  }

  updateProduct(form,id): Observable<any> {
    return this.http.put('http://127.0.0.1:8000/api/products/' + id, form.value);
  }

  storeProduct(form): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/products',form.value);
  }

  deleteProduct(id): Observable<any> {
    return this.http.delete('http://127.0.0.1:8000/api/products/' + id);
  }
}
