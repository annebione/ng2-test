import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1 class="home--title">{{title}}</h1>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/users">Usuários</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Customer Info Board';
}