import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { AuthLoginInfo } from 'src/app/core/auth/login-info';
import { TokenStorageService } from 'src/app/core/auth/token-storage.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoginFailed = false;
  errorMessage = '';
  loading = false;
  submitted = false;
  roles: string[] = [];
  returnUrl: string;
  public loginForm: FormGroup;
  private loginInfo: AuthLoginInfo;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService,
  ) { }

  get f() { return this.loginForm.controls; }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [
        null,
        Validators.compose([Validators.required])
      ],
      password: [
        null,
        Validators.compose([Validators.required])
      ]
    });

  }

  onSubmit() {
    this.loginInfo = this.loginForm.value;
    this.loading = true;
    this.submitted = true;
    // Retourne une erreur si le formulaire est invalide
    if (this.loginForm.invalid) {
      return;
    }


    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;

        this.roles = this.tokenStorage.getAuthorities();

        if (this.roles[0] === 'ROLE_USER') { this.router.navigate(['../index']); }
        if (this.roles[0] === 'ROLE_MEMBRE') { this.router.navigate(['../index']); }
        if (this.roles[0] === 'ROLE_OFFICER') { this.router.navigate(['../index']); }
        if (this.roles[0] === 'ROLE_ADMIN') { this.router.navigate(['../index']); }
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
        this.loading = false;
      }
    );

  }
}
