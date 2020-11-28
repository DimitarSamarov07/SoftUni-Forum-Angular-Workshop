import {Component, OnInit} from '@angular/core';
import {ITheme} from "../../shared/interfaces";
import {IPost} from "../../shared/interfaces/post";
import {ActivatedRoute} from "@angular/router";
import {ThemeService} from "../theme.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  theme: ITheme<IPost>;

  constructor(
    private themeService: ThemeService,
    private activatedRoute: ActivatedRoute
  ) {
    const id = this.activatedRoute.snapshot.params.id;
    this.themeService.loadTheme<IPost>(id).toPromise().then(result => {
      this.theme = result;
    });
  }

  ngOnInit(): void {

  }

}
