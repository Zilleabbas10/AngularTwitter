import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../../services/twitter.service';

@Component({
  selector: 'app-hashtag-search',
  templateUrl: './hashtag-search.component.html',
  styleUrls: ['./hashtag-search.component.scss']
})
export class HashtagSearchComponent implements OnInit {

  public searchType: string = '';
  public searchString: string = '';
  public tweets: any = [];
  public loader: boolean = false;

  constructor(private twitterService: TwitterService) { 
    //console.log('HashtagSearchComponent');
   }

  ngOnInit() {
    this.searchType = 'hashtag';
      this.getTweetsByHastags('mtshcode');
  }

  getTweetsByHastags(hashtag){
    this.twitterService.getTweetsByHastags(hashtag).subscribe((data) => {
      this.loader = true;
      this.tweets = data;
    });
  }

  receiveSearchString($event) {
    this.searchString = $event;
    this.loader = false;
    this.tweets = [];
    setTimeout(() => {
      this.getTweetsByHastags(this.searchString);
    }) 
  }

}
