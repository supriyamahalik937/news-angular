import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  public selected_cat: any;
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

  httpPut(url, body: any) {
    let user = this.getUser();
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${user?.token}`);
    let full_path = environment.baseUrl + url;
    return this.http.put(full_path, body, { headers });
  }

  getUser() {
    let user = localStorage.getItem("user")
    console.log(user);
    return JSON.parse(user);
  }
}
