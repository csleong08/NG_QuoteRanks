import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show-author',
  templateUrl: './show-author.component.html',
  styleUrls: ['./show-author.component.css']
})
export class ShowAuthorComponent implements OnInit {
  author: any = {};
  errors;

  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params) => {
      console.log("ngOnInit() in show-author.component.ts", params);
      let obs = this._httpService.oneAuthor(params.author_id)
      obs.subscribe(data => {
        this.author = data;
        console.log("WORKS! oneAuthor() in show-author.component.ts", params);
      });
    });
  }
  vote(quote_id, num){
    console.log("vote() in show-author.component.ts");
    let obs = this._httpService.updateQuote(quote_id, num);
    obs.subscribe(data => {
      console.log("vote info updated!", data);
      this.author = data;
    });
  }
  delete(quote_id){
    console.log("delete in show-author.component.ts");
    let obs = this._httpService.deleteQuote(quote_id);
    obs.subscribe(data => {
      console.log("WORKS! delete() in show-author.component.ts", data);
      this.author = data;
    })
  }
}
