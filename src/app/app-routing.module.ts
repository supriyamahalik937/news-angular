import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavListComponent } from './fav-list/fav-list.component';
import { CategoryListComponent } from './Pages/category-list/category-list.component';
import { HomeComponent } from './Pages/home/home.component';
import { NewsDetailsComponent } from './Pages/news-details/news-details.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'news-details', component: NewsDetailsComponent
  },
  {
    path: 'news-details/:newsId', component: NewsDetailsComponent
  },
  {
    path: 'category-list', component: CategoryListComponent
  },

  {
    path: 'login', component: CategoryListComponent
  },
  {
    path: 'fav-list', component: FavListComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
