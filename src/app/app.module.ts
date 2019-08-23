import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { TruncateModule } from 'ng2-truncate';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashtagSearchComponent } from './components/hashtag-search/hashtag-search.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableSearchComponent } from './components/table-search/table-search.component';
import { TableComponent } from './components/table/table.component';
import { DateFormatPipe } from './pipes/date-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HashtagSearchComponent,
    UserSearchComponent,
    NavbarComponent,
    TableSearchComponent,
    TableComponent,
    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    TruncateModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
