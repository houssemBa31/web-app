import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-main-layout',
  template: '<router-outlet />',
})
export class MainLayout {}
