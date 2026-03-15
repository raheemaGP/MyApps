import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
  <div class="card p-4 shadow" style="max-width:400px;margin:auto;">

    <h3 class="text-center">Login</h3>

    <div class="mb-3">
      <label>Username</label>
      <input type="text" class="form-control">
    </div>

    <div class="mb-3">
      <label>Password</label>
      <input type="password" class="form-control">
    </div>

    <button class="btn btn-success w-100">
      Login
    </button>

  </div>
  `
})
export class LoginComponent { }