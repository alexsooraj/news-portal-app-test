import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl = 'https://api.nytimes.com/svc/news/v3/content/';

  private apiKey = 'ADD_API_KEY_HERE';

  constructor(private http: HttpClient) { }

  prepareParams(params?: any) {
    const newParams = {
      "api-key": this.apiKey,
      ...params
    }
    const httpParams = new HttpParams().appendAll(newParams);
    return httpParams;
  }

  get<T>(path: string, params?: any) {
    return this.http.get<T>(this.baseUrl + path, { params: this.prepareParams(params) });
  }
}
