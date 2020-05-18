import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {

  public users:BehaviorSubject<string[]> = new BehaviorSubject(['Bangaly']);
  constructor() { }

  /**
   * addUser
   * user:string
   */
  public addUser(user:string) {
    this.users.value.push(user);
  }
}
