import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  {
    path: 'user/:id',
    loadComponent: () =>
      import('./components/user/user.component').then((c) => c.UserComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  },
];
