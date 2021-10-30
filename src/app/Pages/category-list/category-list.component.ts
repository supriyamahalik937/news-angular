import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  public selected_category: any;
  public categoryArray = [];
  public newscategoryArray = [];
  constructor(
    private httpService: NewsService,
    private router: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.selected_category = this.httpService.selected_cat;
    this.category();
    this.newsBycategory();
  }

  getCategoryNews(item) {
    console.log("calling ", item);
    this.httpService.selected_cat = item;
    this.selected_category = this.httpService.selected_cat;
    this.newsBycategory();
  }
  newsBycategory() {
    this.httpService.httpGet(`api/news/getByCategory/${this.selected_category._id}/1/20`).subscribe(res => {
      this.newscategoryArray = res['data']
      console.log("newsBycategory", res);
    }, (error: any) => {
      console.log(error);
    })
  }



  category() {
    this.httpService.httpGet('api/category/getAllCat').subscribe(res => {
      this.categoryArray = res['data'];
      console.log("res", res);
    }, (error: any) => {
      console.log(error);
    })

  }

}
