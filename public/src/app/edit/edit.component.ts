import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  newauthor: any = {};
  error;
  author_id;

  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params) => {
      console.log("ngOnInit in edit.component.ts", params);
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
      this.newauthor = data;
    })
  }
  updateAuthor(){
    console.log("updateAuthor() in edit.component.ts");
    let obs = this._httpService.updateAuthor(this.author_id, this.newauthor);
    obs.subscribe(data => {
      if (data['errors']){
        this.error = data['errors']['name']['message'];
        console.log(this.error);
        // this._router.navigate(['/'])
      }else{
        console.log("author info updated!");
        this._router.navigate(['/']);
      }
    })
  }
}
