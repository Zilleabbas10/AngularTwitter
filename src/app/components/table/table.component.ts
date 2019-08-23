import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tweets: any;
  @Input() loader: boolean;
  public p: number = 1;

  constructor() { }

  ngOnInit() {
    //console.log(this.tweets);
  }

  hashtagLimit(hastags){
    if(hastags.length > 2){
      return `${hastags[0]}, ${hastags[1]}`;
    }else{
      return hastags;
    }
  }

}
