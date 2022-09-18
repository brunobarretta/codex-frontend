import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Observable
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldClockApiService {

  private url: string = 'http://worldclockapi.com/api/json/utc/now';
  private urlServer: string = 'http://localhost:8080/list';

  constructor(
    private http: HttpClient
  ) { }

  getTime():Observable<any>{
    return this.http.get<any>(this.url)
  }

  getTimeServer():Observable<any>{
    return this.http.get<any>(this.urlServer)
  }

}