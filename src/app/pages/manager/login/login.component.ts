import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';

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
        RouterLink
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent { 
    loginForm : FormGroup = this.fb.group({
        email:  ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
    });

    constructor (private fb: FormBuilder) {}

    ngOninit () {
        
    }

    onSubmit () {
        const email = this.loginForm.get('email')?.value;
        const mdp = this.loginForm.get('password')?.value;
    }
    
    get f() { return this.loginForm.controls; }
    
}
