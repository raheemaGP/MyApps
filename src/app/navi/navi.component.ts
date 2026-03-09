import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [RouterModule],
  template: `
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand">Angular Midterm</a>

      <div class="navbar-nav">
        <a class="nav-link" routerLink="/">Home</a>
        <a class="nav-link" routerLink="/about">About</a>
        <a class="nav-link" routerLink="/interpolation">Interpolation</a>
        <a class="nav-link" routerLink="/property-binding">Property Binding</a>
        <a class="nav-link" routerLink="/user-interaction">User Interaction</a>
        <a class="nav-link" routerLink="/login">Login</a>
      </div>
    </div>
  </nav>
  `
})
export class NaviComponent {}