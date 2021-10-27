import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient
  ) { }


  httpGet(url, header = {}) {
    let full_path = environment.baseUrl + url;
    return this.http.get(full_path, header);
  }

  httpPost(url, body = {}, header = {}) {
    let full_path = environment.baseUrl + url;

    return this.http.post(full_path, body, header);
  }

  getUser() {
    let user = localStorage.getItem("user")
    console.log(user);
    return JSON.parse(user);
  }
}
