import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface User {
  id: number;
  name: string;
  position: string;
  department: string;
  details: { role: [number, string] };
}

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css'],
})
export class TwoWayBindingComponent {
  twoWayName: string = 'Change me!';
  twoWayEmail: string = '';
  twoWayAge: number = 20;
  twoWayGender: string = 'male';
  twoWaySubscribed: boolean = false;
  twoWayLanguage: string = 'TypeScript';
  twoWayRating: number = 3;
  twoWayColor: string = '#3b82f6';
  rangeValue: number = 50;

  programmingLanguages: string[] = ['TypeScript', 'JavaScript', 'Python', 'Java', 'C#'];

  selectedId: number | null = null;
  selectedName: string = '';
  selectedDepartment: string = '';
  selectedPosition: string = '';
  selectedRole: string = '';

  users: User[] = [
    { id: 1, name: 'John Doe', position: 'Developer', department: 'IT', details: { role: [1, 'Admin'] } },
    { id: 2, name: 'Jane Smith', position: 'Designer', department: 'Creative', details: { role: [2, 'Editor'] } },
    { id: 3, name: 'Alice Johnson', position: 'Manager', department: 'Management', details: { role: [3, 'Viewer'] } }
  ];

  onClick(u: User): void {
    console.log('Button clicked!');
    this.selectedId = u.id;
    this.selectedName = u.name;
    this.selectedDepartment = u.department;
    this.selectedPosition = u.position;
    this.selectedRole = u.details.role[1];
    console.log(`Selected User ID: ${this.selectedId}`);
  }

  get profileSummary(): string {
    const sub = this.twoWaySubscribed ? 'Subscribed' : 'Not subscribed';
    return `${this.twoWayName}, ${this.twoWayAge} years old, ${this.twoWayGender}. ` +
           `Prefers ${this.twoWayLanguage}. Rating: ${this.twoWayRating}/5. ${sub}.`;
  }

  resetForm(): void {
    this.twoWayName = '';
    this.twoWayEmail = '';
    this.twoWayAge = 18;
    this.twoWayGender = 'male';
    this.twoWaySubscribed = false;
    this.twoWayLanguage = 'TypeScript';
    this.twoWayRating = 3;
    this.twoWayColor = '#3b82f6';
    this.rangeValue = 50;
  }
}