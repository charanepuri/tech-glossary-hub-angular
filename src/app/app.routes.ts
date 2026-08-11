import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then(
        m => m.HomeComponent
      )
  },
  {
    path: 'categories',
    loadComponent: () =>
      import('./pages/categories/categories.component').then(
        m => m.CategoriesComponent
      )
  },
  {
    path: 'glossary',
    loadComponent: () =>
      import('./pages/glossary/glossary.component').then(
        m => m.GlossaryComponent
      )
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then(
        m => m.AboutComponent
      )
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        m => m.ContactComponent
      )
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        m => m.NotFoundComponent
      )
  }
];