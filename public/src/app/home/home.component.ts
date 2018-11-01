import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  author_list : any = [];

  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    let obs = this._httpService.allAuthors();
    obs.subscribe(data => {
      console.log("got allAuthors data!", data);
      this.author_list = data;
      console.log(this.author_list);
    })
  }
}

