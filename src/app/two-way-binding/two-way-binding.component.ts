import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../user/user.component'; // Make sure this path points to your User interface/class

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  // Two-way binding properties
  twoWayName: string = 'Change me!';
  twoWayEmail: string = '';
  twoWayAge: number = 20;
  twoWayGender: string = 'male';
  twoWaySubscribed: boolean = false;
  twoWayLanguage: string = 'TypeScript';
  twoWayRating: number = 3;
  twoWayColor: string = '#3b82f6';
  rangeValue: number = 50; // Added for slider

  // Dropdown options
  programmingLanguages: string[] = ['TypeScript', 'JavaScript', 'Python', 'Java', 'C#'];

  // Selected user details
  selectedId: number | null = null;
  selectedName: string = '';
  selectedDepartment: string = '';
  selectedPosition: string = '';
  selectedRole: string = '';

  // User list
  user: User[] = [
    { id: 1, name: 'John Doe', position: 'Developer', department: 'IT', details: { role: [1, 'Admin'] } },
    { id: 2, name: 'Jane Smith', position: 'Designer', department: 'Creative', details: { role: [2, 'Editor'] } },
    { id: 3, name: 'Alice Johnson', position: 'Manager', department: 'Management', details: { role: [3, 'Viewer'] } }
  ];

  // Handle modal button click
  onClick(u: User): void {
    this.selectedId = u.id;
    this.selectedName = u.name || '';
    this.selectedDepartment = u.department || '';
    this.selectedPosition = u.position || '';
    this.selectedRole = u.details?.role[1] || '';
  }

  // Profile summary for live preview
  get profileSummary(): string {
    const sub = this.twoWaySubscribed ? 'Subscribed' : 'Not subscribed';
    return `${this.twoWayName}, ${this.twoWayAge} years old, ${this.twoWayGender}. Prefers ${this.twoWayLanguage}. Rating: ${this.twoWayRating}/5. ${sub}.`;
  }

  // Reset form fields
  resetForm(): void {
    this.twoWayName = '';
    this.twoWayEmail = '';
    this.twoWayAge = 18;
    this.twoWayGender = 'male';
    this.twoWaySubscribed = false;
    this.twoWayLanguage = 'TypeScript';
    this.twoWayRating = 3;
    this.rangeValue = 50;
  }
}