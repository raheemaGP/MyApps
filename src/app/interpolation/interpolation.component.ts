import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  template: `
  <div class="card p-4 shadow">
    <h2>Interpolation Example</h2>

    <p><b>Name:</b> {{name}}</p>
    <p><b>Course:</b> {{course}}</p>
    <p><b>Section:</b> {{section}}</p>
  </div>
  `
})
export class InterpolationComponent {

  name = "Raheema";
  course = "BSIT";
  section = "Web Development";

}