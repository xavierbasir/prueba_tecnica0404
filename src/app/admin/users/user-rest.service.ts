import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {
  users: Array<{id: number, name: string, email: string}> = [];
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/user-list');
  }

  editUser(id): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/user-list/' + id);
  }

  updateUser(form,id): Observable<any> {
    return this.http.put('http://127.0.0.1:8000/api/user-list/' + id, form.value);
  }

  storeUser(form): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/user-list',form.value);
  }

  deleteUser(id): Observable<any> {
    return this.http.delete('http://127.0.0.1:8000/api/user-list/' + id);
  }
}
