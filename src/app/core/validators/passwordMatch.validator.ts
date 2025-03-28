import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (form: AbstractControl): ValidationErrors | null => {
  const password = form.get('password')?.value;
  const confirmPassword = form.get('passwordConfirm')?.value;
  return password === confirmPassword ? null : { passwordMismatch: true };
};
