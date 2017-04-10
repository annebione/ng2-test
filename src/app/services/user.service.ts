import { Injectable } from '@angular/core';
import { Http }  from '@angular/http';
import { User } from '../models/user';
import { USERS } from '../models/mock-users';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private usersUrl = 'https://randomuser.me/api/'; 
  private manyusersUrl = 'https://randomuser.me/api/?results=50'; 

  constructor(private http: Http) { }

  getUsers(): Promise<Array<User>> {
    return this.http
      .get(this.manyusersUrl)
      .toPromise()
      .then((response) => {
        var res = response.json();
        return res.results;
      })
      .catch(this.handleError);
  }

  getUser(): Promise<User> {
    return this.http
      .get(this.usersUrl)
      .toPromise()
      .then((response) => {
        var res = response.json();
        return res.results[0];
      }));
  }

  save(user: User): Promise<User> {
    if (user.id) {
      return this.put(user);
    }
    return this.post(user);
  }

  delete(user: User): Promise<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.usersUrl}/${user.id}`;

    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }

  // Add new User
  private post(user: User): Promise<User> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.usersUrl, JSON.stringify(user), { headers: headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  // Update existing User
  private put(user: User): Promise<User> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.usersUrl}/${user.id}`;

    return this.http
      .put(url, JSON.stringify(user), { headers: headers })
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Ocorreu um erro', error);
    return Promise.reject(error.message || error);
  }
}