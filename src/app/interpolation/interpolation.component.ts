import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, JsonPipe } from '@angular/common';

export interface User {
  name?: string;
  position?: string;
  department?: string;
  details?: {
    role: string;
  };
}

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [FormsModule, NgFor, JsonPipe],
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css'],
})
export class InterpolationComponent {     

  // SECTION A: String Interpolation Properties
  title: string = 'Angular Data Binding Demo';
  studentName: string = 'Maria Santos';
  courseCode: string = 'APPDEV1';
  currentYear: number = new Date().getFullYear();
  roles = ['Admin', 'Editor', 'Viewer'];

  text: string = "{{expression}}";
  curly: string ="{{ }}";
  common: string ="{{ userName }}";
  methods: string= "{{ getStatus() }}";
  dotnot: string="{{ user.name }}";
  dotnot2: string ="{{ user?.profile?.email }}";
  jpipe: string ="{{ user | json }}";
  isActive: boolean = false;

  user: User = {
    name: 'John Doe',
    position: 'Software Engineer',
    department: 'IT',
    details: { role: 'Admin' }
  };

  countries = [
    { id: 'PH', name: 'Philippines' },
    { id: 'US', name: 'United States' },
    { id: 'JP', name: 'Japan' }
  ];
  selectedCountryId = 'PH'; // Initial value

  // Array of strings
  skills = ['Angular', 'TypeScript', 'RxJS'];

  // Array of objects
  projects = [
    { id: 1, name: 'Dashboard' },
    { id: 2, name: 'Mobile App' }
  ];

  // Interpolation can call methods too
  getWelcomeMessage(): string {
    return `Welcome, ${this.studentName}! Today we learn data binding.`;
  }

}