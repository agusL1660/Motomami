import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/api/auth.service';
import { LoginInterface } from '../../../interfaces/LoginInterface';
import { SharedModule } from '../../../shared/shared.module';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  hide = signal(true);
  hidePassword: boolean = true;

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.loginForm.valid) {

      const object: LoginInterface = {
        email: this.loginForm.value.email!,
        password: this.loginForm.value.password!
      }

      this.authService.login(object).subscribe({
        next: (response) => {
          this.authService.autenticar();
          sessionStorage.setItem('token', response.access_token);// esto se coloco directamente en el service del auto usando el token
          this.router.navigate(['']); 
          this.loginForm.reset();
        },
        
        error: (err) => console.error('Error en login:', err)

      });
    }
    else{
      this.loginForm.markAllAsTouched();
    }
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  email(){
    return this.loginForm.get('email');
  }

  password(){
    return this.loginForm.get('password');
  }
  regresar() {
    this.router.navigateByUrl("/");
  }
}
