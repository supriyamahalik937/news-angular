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
  isApiCalling: boolean = true;
  constructor(
    private httpService: NewsService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getNews();
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
}
