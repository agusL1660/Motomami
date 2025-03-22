import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(password: string, confirmPassword: string): ValidatorFn {
  return (form: AbstractControl): ValidationErrors | null => {
    const pass = form.get(password)?.value;
    const confirmPass = form.get(confirmPassword)?.value;
    return pass === confirmPass ? null : { passwordMismatch: true };
  };
}
