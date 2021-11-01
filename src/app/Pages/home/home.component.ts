import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public newsArray = [];
  public newsSlider = [];
  isApiCalling: boolean = true;
  constructor(
    private httpService: NewsService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getNews();
    this.getNewsSlider();
  }


  getNews() {
    this.spinner.show();
    this.httpService.httpGet('api/news/getAllNews/1/20').subscribe(res => {
      this.isApiCalling = false;
      this.spinner.hide();
      this.newsArray = res['data'];
      console.log("res ", res);
    }, (error: any) => {
      this.isApiCalling = false;
      this.spinner.hide();

      console.log(error);
    })
  }

  getNewsSlider() {
    this.httpService.httpGet('api/news/getAllNews/slider').subscribe(res => {
      this.newsSlider = res['data'];
      console.log("getNewsSlider", res);
    }, (error: any) => {
      console.log(error);
    })
  }


}
