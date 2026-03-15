import { Component } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
>>>>>>> 43c60ef965704e5c977c449a32804b1ed100b1ea

@Component({
  selector: 'app-property-binding',
  standalone: true,
<<<<<<< HEAD
  imports: [FormsModule],
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css'],
})
export class PropertyBindingComponent {

  isButtonDisabled: boolean = true; 
  imageSource: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvV-5WoPyE3Xxu7pCh9MHJur2fxTo6Ue_5_A&s';
  imageAlt: string = 'SIT Logo';
  imageWidth: number = 80;
  linkUrl: string = 'https://www.ubaguio.edu/';
  inputPlaceholder: string = 'Type your name here...';
  clickCount: number = 0; 
  inputName: string = ''; 

  onButtonClick(): void {
    this.clickCount++;
    this.isButtonDisabled = false; 
  }
=======
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

>>>>>>> 43c60ef965704e5c977c449a32804b1ed100b1ea
}