import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-property-binding',
  standalone: true,
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
}