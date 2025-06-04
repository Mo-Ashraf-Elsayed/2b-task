import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);
  private readonly baseURL = `https://jsonplaceholder.typicode.com/`;

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL + 'users/');
  }
  getById(id: string): Observable<User> {
    return this.http.get<User>(this.baseURL + `users/${id}`);
  }
}
