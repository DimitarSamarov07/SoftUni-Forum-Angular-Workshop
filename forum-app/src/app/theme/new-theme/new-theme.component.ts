import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

const apiUrl = environment.apiUrl;

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})

export class NewThemeComponent implements OnInit {

  form = {
    title: {
      touched: false,
      value: ""
    },
    post: {
      touched: false,
      value: "",
    }
  }

  get showTitleEmptyErr(): boolean {
    const {value, touched} = this.form.title;
    return value.length === 0 && touched;
  }

  get showTitleTooShortErr(): boolean {
    const {value, touched} = this.form.title;
    return value.length < 5 && touched;
  }

  get showPostEmptyErr(): boolean {
    const {value, touched} = this.form.post;
    return value.length === 0 && touched;
  }

  get showPostTooShortErr(): boolean {
    const {value, touched} = this.form.post;
    return value.length < 10 && touched;
  }

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
  }

  updateInputValue(name: "title" | "post", value: string): void {
    this.form[name].value = value;
    this.form[name].touched = true
  }

  createNewTheme(themeName, postText) {
    this.http.post(`${apiUrl}/themes`, {themeName, postText})
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(["/"])
      });
  }

}
