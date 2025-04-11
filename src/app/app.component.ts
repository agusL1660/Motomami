import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,FooterComponent,SharedModule],   
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: []
})
export class AppComponent{
  title = 'Motomami';

  showLayout: boolean = true;
  
  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd) // Detecta cambios de ruta
    ).subscribe((event: any) => {
      const rutaActual = event.urlAfterRedirects;
      this.showLayout = !(rutaActual.includes('/login') || rutaActual.includes('/register'));
    });
  }
  
}
