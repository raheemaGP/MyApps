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

        <!-- Dropdown -->
        <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
            Data Binding
          </a>

          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" routerLink="/interpolation">Interpolation</a>
            </li>
            <li>
              <a class="dropdown-item" routerLink="/property-binding">Property Binding</a>
            </li>
            <li>
              <a class="dropdown-item" routerLink="/two-way-binding">Two-Way Binding</a>
            </li>
            <li>
              <a class="dropdown-item" routerLink="/event-binding">Event Binding</a>
            </li>
          </ul>
        </div>

        <!-- Products link -->
        <a class="nav-link" routerLink="/products">Products</a>
        <!-- Login / User Interaction removed -->
      </div>
    </div>
  </nav>
  `
})
export class NaviComponent {}