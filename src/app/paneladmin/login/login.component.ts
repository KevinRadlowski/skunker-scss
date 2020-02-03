import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthLoginInfo } from 'src/app/core/auth/login-info';
import { AuthService } from 'src/app/core/auth/auth.service';
import { TokenStorageService } from 'src/app/core/auth/token-storage.service';
import { AlertService } from 'src/app/shared/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoginFailed = false;
  errorMessage = '';
  loading = false;
  roles: string[] = [];
  returnUrl: string;
  public loginForm: FormGroup;
  private loginInfo: AuthLoginInfo;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }



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

    // reset login status
    // this.authenticationService.logout();
  }

  onSubmit() {
    this.loginInfo = this.loginForm.value;
    this.loading = true;
    // stop here if form is invalid
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

        if (this.roles[0] === 'ROLE_MEMBRE') { this.router.navigate(['../index']); }
        if (this.roles[0] === 'ROLE_OFFICIER') { this.router.navigate(['../index']); }
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
