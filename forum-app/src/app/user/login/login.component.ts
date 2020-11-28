import {Component, OnInit} from '@angular/core';
import {UserService} from "../../core/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  errMessage: string = null

  form = {
    email: {
      touched: false,
      value: ""
    },
    password: {
      touched: false,
      value: "",
    }
  }

  get showEmailError(): boolean {
    return this.form.email.touched && this.form.email.value.length === 0
  }

  get showPasswordError(): boolean {
    return this.form.password.touched && this.form.password.value.length === 0
  }

  get hasFormErrors() {
    return this.form.email.value.length === 0 || this.form.password.value.length === 0;
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  updateInputValue(name: "email" | "password", value: string): void {
    this.form[name].value = value;
    this.form[name].touched = true
  }

  submitFormHandler(): void {
    const {email: {value: email}, password: {value: password}} = this.form;
    this.isLoading = true
    this.errMessage = "";

    this.userService.login({email, password}).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(["/"])
      },
      error: () => {
        this.errMessage = "ERROR!"
        this.isLoading = false;
      }
    });
  }
}
