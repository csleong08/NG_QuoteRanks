import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {
  quote = { content: "" };
  author_id;
  error;
  author;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params) => {
      console.log("ngOnInit in new-quote.component.ts", params);
      this.author_id = params.author_id;
      console.log(this.author_id);
      this.showAuthor();
    });
  }
  showAuthor(){
    console.log("getAuthor() in edit.component.ts");
    let obs = this._httpService.oneAuthor(this.author_id);
    obs.subscribe(data => {
      console.log("Got one author!", data);
      this.author = data;
    })
  }
  onSubmit(){
    let obs = this._httpService.createQuote(this.author_id, this.quote);
    obs.subscribe(data => {
      if (data['errors']){
        console.log(data['errors']);
        this.error = data['errors']['quotes']['errors']['content']['message'];
      }else{
        this.quote = { content: "" };
        // this._router.navigate(['/authors', this.author_id]);
        this.goToAuthor();
      }
    })
  }
  goToAuthor(){
    // this._router.navigate("/authors/" + this.author_id)
    this._router.navigate(['/authors', this.author_id]);

  }

}
