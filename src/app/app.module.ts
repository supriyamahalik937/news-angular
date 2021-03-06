import { BrowserModule, } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { NewsDetailsComponent } from './Pages/news-details/news-details.component';
import { CategoryListComponent } from './Pages/category-list/category-list.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NewsCardComponent } from './Components/news-card/news-card.component';
import { HttpClientModule } from '@angular/common/http';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NgxSpinnerModule } from "ngx-spinner";
import { CommonModule } from '@angular/common';
import { FavListComponent } from './fav-list/fav-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsDetailsComponent,
    CategoryListComponent,
    HeaderComponent,
    FooterComponent,
    NewsCardComponent,
    FavListComponent

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    IvyCarouselModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
