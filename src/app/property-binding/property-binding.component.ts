import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  template: `
  <div class="card p-4 shadow text-center">

    <h2>Property Binding</h2>

    <img [src]="imageUrl" width="200">

    <p class="mt-3">Image loaded using property binding.</p>

  </div>
  `
})
export class PropertyBindingComponent {

  imageUrl = "https://angular.io/assets/images/logos/angular/angular.png";

}