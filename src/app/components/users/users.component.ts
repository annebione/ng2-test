import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'my-users',
  providers: [UserService],
  template: `
    <h2>Users List</h2>
    <ul class="users">
      <li *ngFor="let user of users"  [routerLink]="['/profile', user.id]" [class.selected]="user === selectedUser" (click)="onSelect(user)">
         {{user.name.title}} {{ user.name.first }} {{ user.name.last }}
      </li>
    </ul>
    `,
})

export class UsersComponent implements OnInit {
  users: User[];
  selectedUser: User;
  constructor(private userService: UserService) {};
  getUsers(): void {
    this.userService.getUsers().then((users) { => 
      this.users = users;
    });
  };
  ngOnInit(): void {
    this.getUsers().then((users) { => 
      this.users = users;
    });
  };
  onSelect(user: User): void {
    this.selectedUser = user;
  };
}