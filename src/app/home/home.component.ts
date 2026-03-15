import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
  <div class="card p-4 shadow">
    <h2>Welcome to My Angular Midterm Project</h2>
    <p>This project demonstrates Angular components and data binding.</p>
  </div>
  `
})
export class HomeComponent { }