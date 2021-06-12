import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FishService {

  constructor(
    private http: HttpClient
  ) {
  }

  getFishList(): Observable<any> {
    return this.http.get('https://acnhapi.com/v1/fish');
  }

  getFish(fishId: number): Observable<any> {
    return this.http.get('https://acnhapi.com/v1/fish/' + fishId);
  }
}
