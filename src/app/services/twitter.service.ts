import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  public url : string = 'http://am-twitter-scrape.herokuapp.com' 

  constructor(private http: HttpClient) {}

  public getTweetsByUsers(user) {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get<any[]>( `${this.url}/users/${user}?pages_limit=3&wait=0`);
  }

  public getTweetsByHastags(hashtag) {
    let headers = new HttpHeaders();
      headers = headers.set('Accept', 'application/json');
      headers = headers.set('Content-Type', 'application/json');
    return this.http.get<any[]>( `${this.url}/hashtags/${hashtag}?pages_limit=3&wait=0`);
  }

}
