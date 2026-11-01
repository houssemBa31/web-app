import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/main-layout/main-layout').then((module) => module.MainLayout),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/home-page').then((module) => module.HomePage),
      },
    ],
  },
];
