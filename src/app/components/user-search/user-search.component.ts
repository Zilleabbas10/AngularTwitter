import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../../services/twitter.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  public searchType: string = '';
  public searchString: string = '';
  public tweets: any = [];
  public loader: boolean = false;

  constructor(private twitterService: TwitterService) { 
    //console.log("UserSearchComponent");
   }

  ngOnInit() {
    this.searchType = 'user';
      this.getTweetsByUsers('instagram');
  }

  getTweetsByUsers(user){
    this.twitterService.getTweetsByUsers(user).subscribe((data) => {
      //console.log(data);
      this.loader = true;
      this.tweets = data;
      //console.log(this.tweets);
    });
  }

  receiveSearchString($event) {
    this.searchString = $event;
    this.loader = false;
    this.tweets = [];
    setTimeout(() => {
      this.getTweetsByUsers(this.searchString);
    }) 
  }

}
