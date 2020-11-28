import {Component, DoCheck} from '@angular/core';
import {UserService} from "../core/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements DoCheck {
  isLogged: boolean;
  url: string;

  constructor(private userService: UserService) {
  }

  ngDoCheck() {
    this.isLogged = this.userService.isLogged;
  }
}
