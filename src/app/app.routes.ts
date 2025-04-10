import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent), },
    { path: 'login', loadComponent: () => import('./auth/pages/login/login.component').then(m => m.LoginComponent) },
    { path: 'register', loadComponent: () => import('./auth/pages/register/register.component').then(m => m.RegisterComponent) },
    { path: 'motos', loadComponent: () => import('./features/motos/motos.component').then(m => m.MotosComponent), },
    { path: 'motos/informacion/:id', loadComponent: () => import('./features/info-productos/info-productos.component').then(m => m.InfoProductosComponent), },
    { path: 'motos/estilo/:id', loadComponent: () => import('./features/info-productos/info-productos.component').then(m => m.InfoProductosComponent), },
    { path: 'carrito', loadComponent: () => import('./features/carrito/carrito.component').then(m => m.CarritoComponent),},
    { path: 'pedidos', loadComponent: () => import('./features/pedidos/pedidos.component').then(m => m.PedidosComponent),},

];
