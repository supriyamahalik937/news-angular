import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('comment', { static: true }) txtArea: ElementRef;

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
    this.checkNewsIsfav();

  }

  getNewsDetails() {
    console.log("txtArea ", this.txtArea);

    this.httpService.httpGet(`api/news/getById/${this.newsId}`).subscribe(res => {
      console.log(res);
      this.newsDetail = res['data'];

    }, (error) => {
      console.log(error);
    })
  }

  AddComment(comment) {
    console.log(comment);
    let body = {
      newsId: this.newsId,
      comment: comment
    }
    this.httpService.httpPut(`api/news/add/comment/onNews`, body).subscribe(res => {
      console.log(res);
      this.getNewsDetails();
      this.txtArea.nativeElement.value = "";
    }, (error) => {
      console.log(error);
    });
  }


  checkNewsIsfav() {
    this.httpService.httpGet(`api/users/checkExists/fav/${this.newsId}`).subscribe(res => {
      console.log("checkNewsIsfav ", res);
    }, (error) => {
      console.log(error);
    })
  }

}
