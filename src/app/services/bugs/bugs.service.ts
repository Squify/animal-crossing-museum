import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BugsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getBugsList(): Observable<any> {
    return this.http.get('https://acnhapi.com/v1/bugs');
  }

  getBugs(bugsId: number): Observable<any> {
    return this.http.get('https://acnhapi.com/v1/bugs/' + bugsId);
  }
}
