'use strict';

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  providers: [UserService]
})
export class UserProfileComponent implements OnInit{
   @Input() user: User;
   constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
   ) {};
   ngOnInit(): void {
     this.userService.getUser()
    .then(user => this.user = user);
   };
  goBack(): void {
    this.location.back();
  }
}