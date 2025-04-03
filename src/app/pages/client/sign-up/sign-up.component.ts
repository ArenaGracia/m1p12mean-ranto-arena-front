import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AuthService } from '../../../core/service/auth.service';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    RouterModule,
    RippleModule,
    CardModule,
    ReactiveFormsModule,
    FormsModule,
    MessageModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl : './sign-up.component.scss'
})
export class SignUpComponent { 
  signUpForm : FormGroup = this.fb.group({
      name: ['', Validators.required],
      first_name: ['', Validators.required],
      email:  ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      contact: ['', Validators.required]
  });
  errorMessage: string = '';

  constructor (private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  onSubmit () {
      const email = this.signUpForm.get('email')?.value;
      const mdp = this.signUpForm.get('password')?.value;
      const name = this.signUpForm.get('name')?.value;
      const first_name = this.signUpForm.get('firstname')?.value;
      const contact = this.signUpForm.get('contact')?.value;
      
      this.auth.signup(name, first_name, email, mdp, contact).subscribe({
          next: (res) => {
            this.auth.saveToken(res.token);
            this.router.navigate(['/client/quote']);
          },
          error: (err) => {
              this.errorMessage = err.error.message;
              console.error(err)
          }
        });
  }
  
  get f() { return this.signUpForm.controls; }


}
