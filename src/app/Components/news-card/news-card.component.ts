import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  @Input() news: any;
  @Input() isSmallCard: boolean = false;

  constructor(
    private router: Router,
    private httpService: NewsService
  ) { }

  ngOnInit(): void {
    console.log("news ", this.news);

  }

  goToDetailsPage() {
    this.router.navigate(['/news-details', this.news._id])
  }

  // AddFavourite() {
  //   this.httpService.httpPut(`api/users/addToFav/${this.news._id}`).subscribe(res => {
  //     console.log(res);
  //   }, error => {
  //     console.log(error);
  //   })
  // }

}
