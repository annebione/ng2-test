import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AppComponent }  from './app.component';
import { UsersComponent }  from './components/users/users.component';
import { DashboardComponent }  from './components/dashboard/dashboard.component';
import { RouterModule }   from '@angular/router';
import { ChartModule } from 'angular2-highcharts';
import { HttpModule }    from '@angular/http';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ChartModule.forRoot(require('highcharts')),
    HttpModule,
    RouterModule.forRoot([
     {
       path: 'users',
       component: UsersComponent
     },
     {
       path: 'dashboard',
       component: DashboardComponent
     },
     {
       path: '',
       redirectTo: '/dashboard',
       pathMatch: 'full'
     },
     {
       path: 'profile',
       component: UserProfileComponent
     },
   ])
  ],
  declarations: [
    AppComponent,
    UsersComponent,
    DashboardComponent,
    UserProfileComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
