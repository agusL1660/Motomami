import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,FooterComponent],   
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: []
})
export class AppComponent {
  title = 'Motomami';

  showLayout: boolean = true;
  
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.showLayout = !['/login', '/register'].includes(this.router.url);
    });
  }
}
