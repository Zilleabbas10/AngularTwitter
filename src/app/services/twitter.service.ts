import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  public url : string = 'http://am-twitter-scrape.herokuapp.com' 
  public headers : any;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
  }

  public getTweetsByUsers(user) {
    return this.http.get<any[]>( `${this.url}/users/${user}?pages_limit=3&wait=0`);
  }

  public getTweetsByHastags(hashtag) {
    return this.http.get<any[]>( `${this.url}/hashtags/${hashtag}?pages_limit=3&wait=0`);
  }

}
