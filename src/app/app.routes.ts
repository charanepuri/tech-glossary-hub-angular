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
      import('./pages/home/home').then(
        m => m.Home
      )
  },

  {
    path: 'categories',
    loadComponent: () =>
      import('./pages/categories/categories').then(
        m => m.Categories
      )
  },

  {
    path: 'glossary',
    loadComponent: () =>
      import('./pages/glossary/glossary').then(
        m => m.Glossary
      )
  },

  {
    path: 'glossary/:id',
    loadComponent: () =>
      import('./pages/term-details/term-details').then(
        m => m.TermDetails
      )
  },

  {
  path: 'favorites',
  loadComponent: () =>
    import('./pages/favorites/favorites').then(
      m => m.Favorites
    )
},

  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about').then(
        m => m.About
      )
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then(
        m => m.Contact
      )
  },

  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found').then(
        m => m.NotFound
      )
  }
];