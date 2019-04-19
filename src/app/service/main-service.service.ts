import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('https://api.myjson.com/bins/10ijyt');
  }
}
