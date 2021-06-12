import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  constructor(
    private http: HttpClient
  ) {
  }

  getArtList(): Observable<any> {
    return this.http.get('https://acnhapi.com/v1/art');
  }

  getArt(artId: number): Observable<any> {
    return this.http.get('https://acnhapi.com/v1/art/' + artId);
  }
}
