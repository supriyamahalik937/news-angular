import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  public newsId: string;
  public newsDetail: any = {};
  constructor(
    private httpService: NewsService,
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.newsId = params?.newsId;
    });

  }

  ngOnInit(): void {
    console.log("newsId ", this.newsId);
    this.getNewsDetails();

  }

  getNewsDetails() {
    this.httpService.httpGet(`api/news/getById/${this.newsId}`).subscribe(res => {
      console.log(res);
      this.newsDetail = res['data'];

    }, (error) => {
      console.log(error);
    })
  }

}
