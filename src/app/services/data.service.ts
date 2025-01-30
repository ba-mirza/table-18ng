import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

import users from './data';
import {User} from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public getUsers(): Observable<User[]> {
    return of(users as User[]);
  }
}
