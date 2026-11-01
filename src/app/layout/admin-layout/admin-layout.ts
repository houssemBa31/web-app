import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-admin-layout',
  template: '<router-outlet />',
})
export class AdminLayout {}
