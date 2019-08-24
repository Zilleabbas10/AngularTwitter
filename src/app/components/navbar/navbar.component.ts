import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public activatedTab : string = 'hashtag'; 
  public title : string = 'Angular Twitter';

  constructor() {
   }

  ngOnInit() {
  }

  toggleTab(val){
    this.activatedTab = val;
  }

}
