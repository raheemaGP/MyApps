import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
  <div class="card p-4 shadow">
    <h2>About</h2>
    <p>Student Name: Raheema</p>
    <p>Course: Web Application Development</p>
  </div>
  `
})
export class AboutComponent { }