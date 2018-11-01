import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {
  author;
  error;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.author = { name: "" }
  
  this._route.params.subscribe((params: Params) => {
    console.log(params);
  })
}
  onSubmit(){
    console.log("onSubmit() in new-author.component.ts");
    let obs = this._httpService.createAuthor(this.author)
    obs.subscribe(data => {
      console.log("got new Author data from post", data);
      if (data['errors']){
        this.error = data['errors']['name']['message'];
        console.log(this.error);
        this.author = {name:""};
      }else{
        console.log("new author created!", data);
        this.author = {name:""};
        this._router.navigate(['/']);
      }
    })
  }
}
