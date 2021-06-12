import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FossilService {

  constructor(
    private http: HttpClient
  ) {
  }

  getFossilList(): Observable<any> {
    return this.http.get('https://acnhapi.com/v1/fossils');
  }

  getFossil(fossilName: number): Observable<any> {
    return this.http.get('https://acnhapi.com/v1/fossils/' + fossilName);
  }
}
