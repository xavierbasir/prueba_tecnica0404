import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AttributeRestService {
  constructor(private http: HttpClient) { }

  getAttributes(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/attributes');
  }

  getAttribute(id): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/attributes/' + id);
  }

  editAttribute(id): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/attributes/' + id);
  }

  updateAttribute(form,id): Observable<any> {
    return this.http.put('http://127.0.0.1:8000/api/attributes/' + id, form.value);
  }

  storeAttribute(form): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/attributes',form.value);
  }

  deleteAttribute(id): Observable<any> {
    return this.http.delete('http://127.0.0.1:8000/api/attributes/' + id);
  }
}
