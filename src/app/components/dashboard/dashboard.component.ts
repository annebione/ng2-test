import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers }  from '@angular/http';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'my-dashboard',
  providers: [UserService],
  templateUrl: './dashboard.component.html',
})


export class DashboardComponent implements OnInit { 
  users: User[] = [];
  constructor(private userService: UserService, http: Http) { 
        var data1 = Number(window.localStorage.getItem('mr'));
        var data2 = Number(window.localStorage.getItem('mrs'));
        var data3 = Number(window.localStorage.getItem('ms'));

        this.options = {
            chart: {
              backgroundColor: '#212322',
              type: 'column'
            },
            xAxis: {
              categories: [
                'Mr.',
                'Mrs.',
                'Ms.',
               ]
            }
            title : { text : 'Top titles' },
            series: [
              {   
              	name: 'Mr.',
                data: [data1],
              },
              {   
              	name: 'Mrs.',
                data: [data2],
              },
              {   
              	name: 'Ms.',
                data: [data3],
              }
            ]
        };
  }
  ngOnInit(): void {
    this.userService.getUsers()
      .then((users) { =>
        var mr = 0;
        var mrs = 0;
        var ms = 0; 
        this.users = users.slice(0, 5);
        
        for (var i = 0; i < this.users.length; i++) {
          if (this.users[i].name.title == 'mr') {
            mr++
          }
          if (this.users[i].name.title == 'ms') {
            ms++
          }
          if (this.users[i].name.title == 'mrs') {
           mrs++
          }
          window.localStorage.setItem('mr', mr);
          window.localStorage.setItem('ms', ms);
          window.localStorage.setItem('mrs', mrs);
        }

       });
  }  
}