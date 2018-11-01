import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  allAuthors(){
    return this._http.get('/authors');
  }
  createAuthor(author){
    return this._http.post('/authors', author);
  }
  createQuote(author_id, quote){
    console.log("sort: ", quote);
    return this._http.put('/quotes/new/' + author_id, quote)
  }
  oneAuthor(author_id){
    return this._http.get('/authors/' + author_id)
  }
  updateAuthor(author_id, newauthor){
    return this._http.put('/authors/' + author_id, newauthor)
  }
  updateQuote(quote_id, num){
    return this._http.patch('/quotes/' + quote_id, {votes:num})
  }
  deleteQuote(quote_id){
    return this._http.delete('/quotes/' + quote_id)
  }
}
