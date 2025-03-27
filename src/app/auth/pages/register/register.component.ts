import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { RegisterInterface } from '../../../interfaces/RegisterInterface';
import { SharedModule } from '../../../shared/shared.module';
import { passwordMatchValidator } from '../../../core/validators/passwordMatch.validator';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  hide = signal(true);
  hidePassword: boolean = true;

  hideConfirm = signal(true);
  hidePasswordConfirm: boolean = true;

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (this.registerForm.valid&&this.confirmPassword()) {

      const object: RegisterInterface = {
        name:this.registerForm.value.name!,
        email: this.registerForm.value.email!,
        password: this.registerForm.value.password!
      }

      this.authService.register(object).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/login']); 
          this.registerForm.reset();
        },
        
        error: (err) => console.error('Error en login:', err)

      });
    }
    else{
      this.registerForm.markAllAsTouched();
    }
  }

  name(){
    return this.registerForm.get('name');
  }
  email(){
    return this.registerForm.get('email');
  }
  password(){
    return this.registerForm.get('password');
  }
  passwordConfirm(){
    return this.registerForm.get('passwordConfirm');
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  togglePasswordVisibilityConfirm() {
    this.hidePasswordConfirm = !this.hidePasswordConfirm;
  }
  
  
  confirmPassword():boolean {
    return this.registerForm.get('password')== this.registerForm.get('passwordConfirm');
  }
}


