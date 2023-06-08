import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url:string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.url);
  }
}
