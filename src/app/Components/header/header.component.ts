import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/service/news.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public categoryArray = [];
  public user: any;
  public isApiCalling: boolean = false;
  constructor(
    private router: Router,
    private httpService: NewsService
  ) { }

  logout() {
    console.log("coming");
    localStorage.removeItem("user");
    window.location.reload();
  }

  ngOnInit(): void {
    this.user = this.httpService.getUser();
    this.category();
  }

  goToLoginPage() {
    this.router.navigate(['/login'])
  }

  goToCatList(item) {
    this.httpService.selected_cat = item;
    this.router.navigate(['/category-list'])
  }

  goToFavlist() {
    this.router.navigate(['/fav-list'])
  }


  register(name, email, password) {
    if (name === "") {
      alert("Name can't be empty!");
      return;
    } else if (email === "") {

    }


    console.log(name, email, password);

    let body = {
      name: name,
      email: email,
      password: password
    }

    this.httpService.httpPost('api/users', body).subscribe(res => {
      console.log("res", res);
      this.opensweetalert('You are successfully registered', "You won't be able to revert this!");
    }, (error: any) => {
      console.log(error);
    })
  }

  login(login_email, login_password) {
    console.log(login_email, login_password);
    this.isApiCalling = true;

    let body = {
      email: login_email,
      password: login_password
    }


    this.httpService.httpPost('api/users/login', body).subscribe(res => {
      localStorage.setItem("user", JSON.stringify(res))
      this.isApiCalling = false;
      console.log("res", res);

      this.opensweetalert('You are successfully Logged in.', "You won't be able to revert this!");

    }, (error: any) => {
      console.log(error);
      this.isApiCalling = false;
      alert(error.error.msg)
    })
  }

  opensweetalert(title, text) {
    Swal.fire({
      title: title,
      text: text,
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();

        // this.router.navigate(["/login"]);

      }
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
