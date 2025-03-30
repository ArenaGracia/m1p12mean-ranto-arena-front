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
  templateUrl: './login.component.html',
})
export class LoginClientComponent { 
  loginForm : FormGroup = this.fb.group({
      email:  ['mitia@gmail.com', [Validators.required, Validators.email]],
      password: ['mitia', Validators.required]
  });
  errorMessage: string = '';

  constructor (private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  onSubmit () {
      const email = this.loginForm.get('email')?.value;
      const mdp = this.loginForm.get('password')?.value;
      
      this.auth.login(email, mdp).subscribe({
          next: (res) => {
            this.auth.saveToken(res.token);
            this.router.navigate(['/client/accueil']);
          },
          error: (err) => {
              this.errorMessage = err.error.message;
              console.error(err)
          }
        });
  }
  
  get f() { return this.loginForm.controls; }


}
