import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  inputEmail;
  inputPassword;

  existUser = {
    email: 'teste@teste.com',
    password: '123123'
  }

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {

  }

  // Aqui eu pego os nomes dos campos para fazer a validação;
  get f() {
    return this.registerForm.controls;
  }

  submitForm() {
    this.submitted = true;
    this.inputEmail = this.registerForm.get('email').value;
    this.inputPassword = this.registerForm.get('password').value;

    if (this.registerForm.invalid) {
      return;
    }

    if (this.inputEmail === this.existUser.email) {
      this.router.navigate(['/home']);
    } 
  }
}
