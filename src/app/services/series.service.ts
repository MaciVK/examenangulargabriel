import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './Global';
@Injectable()
export class SeriesService {
  public url: string;
  constructor(public _http: HttpClient) {
    this.url = Global.url;
  }
  getSeries(): Observable<any> {
    var request = Global.url + 'api/series';
    return this._http.get(request);
  }
  getSerieDetalles(idserie): Observable<any> {
    var request = Global.url + 'api/series/' + idserie;
    return this._http.get(request);
  }
  getPersonajes(): Observable<any> {
    var request = Global.url + 'api/personajes';
    return this._http.get(request);
  }
}
