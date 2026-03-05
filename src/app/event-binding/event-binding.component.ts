import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  template: `
    <h2>Event Binding Example</h2>
    <button (click)="onClick()">Click Me!</button>
    <p>{{ message }}</p>
  `
})
export class EventBindingComponent {
  message = '';

  onClick() {
    this.message = 'Button clicked!';
  }
}