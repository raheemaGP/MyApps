import { Component } from '@angular/core';

@Component({
  selector: 'app-user-interaction',
  standalone: true,
  template: `
  <div class="card p-4 shadow">

    <h2>User Interaction</h2>

    <button class="btn btn-primary" (click)="showMessage()">
      Click Me
    </button>

    <p class="mt-3">{{message}}</p>

  </div>
  `
})
export class UserInteractionComponent {

  message = "";

  showMessage() {
    this.message = "You clicked the button!";
  }

}