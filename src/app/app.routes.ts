import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent), },
    { path: 'login', loadComponent: () => import('./auth/pages/login/login.component').then(m => m.LoginComponent) },
    { path: 'register', loadComponent: () => import('./auth/pages/register/register.component').then(m => m.RegisterComponent) }
];
