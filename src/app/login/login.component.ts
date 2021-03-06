import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {TokenStorageService} from "../services/token-storage.service";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {User} from "../model/user";
import {UserType} from "@app/model/user-type";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  userType = false;
  email: string;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  user: User = new User();

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    if (this.user.userType == UserType.ADMIN) {
      this.userType = true;
    }
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      // this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const {email, password} = this.form;
    this.authService.login(email, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.userService.getUser(email).subscribe(data => {
          this.user = data

        })
        this.email = email
        this.tokenStorage.saveUser(this.user);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        // this.roles = this.tokenStorage.getUser().roles;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  userPage(id: number) {
    this.router.navigate(['user', id]).then(() => {
      window.location.reload();
    })
  }

  adminPage(id: number) {
    this.router.navigate(['admin', id]).then(() => {
      window.location.reload();
    })
  }

  logout(): void {
    this.tokenStorage.signOut();
  }

  // redirectUser(id: number) {
  //   if (this.userType == UserType.ADMIN) {
  //     this.router.navigate(['admin', id]).then(() => {
  //       window.location.reload();
  //     })
  //   } else if (this.userType == UserType.USER) {
  //     this.router.navigate(['user', id]).then(() => {
  //       window.location.reload();
  //     })
  //   }
  // }
}
