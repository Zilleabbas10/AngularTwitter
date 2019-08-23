import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashtagSearchComponent } from './components/hashtag-search/hashtag-search.component';
import { UserSearchComponent } from './components/user-search/user-search.component';


const routes: Routes = [
  // { path: 'hashtag', component: HashtagSearchComponent },
  // { path: 'user', component: UserSearchComponent },
  // { path: '',   redirectTo: '/hashtag', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
