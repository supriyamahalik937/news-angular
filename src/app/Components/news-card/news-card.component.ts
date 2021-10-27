import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  @Input() news: any;
  @Input() isSmallCard: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log("news ", this.news);

  }

  goToDetailsPage() {

    this.router.navigate(['/news-details', this.news._id])
  }

}
