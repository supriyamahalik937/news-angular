import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.css']
})
export class FavListComponent implements OnInit {

  public favNews = [];

  constructor(
    public httpService: NewsService
  ) {

  }

  ngOnInit(): void {
    this.getNewsdetails()
  }



  getNewsdetails() {
    this.httpService.httpGet('api/users/getFavOfUser/all').subscribe(res => {
      console.log(res);
      this.favNews = res["data"];
    }, error => {
      console.log(error)
    });
  }


}
