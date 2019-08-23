import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-table-search',
  templateUrl: './table-search.component.html',
  styleUrls: ['./table-search.component.scss']
})
export class TableSearchComponent implements OnInit {

  @Input() searchType: string;
  @Output() searchStringEvent = new EventEmitter<string>();
  public searchString: string = ''

  constructor() { 
    console.log('TableSearchComponent');
   }

  ngOnInit() {
    console.log(this.searchType)
  }

  sendSearchString() {
    //alert('hello world')
    this.searchStringEvent.emit(this.searchString);
  }

}
