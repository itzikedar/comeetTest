import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { get, map, cloneDeep } from 'lodash';

@Injectable()
export class CommunicationService {
  public headers: any;
  constructor(
    private http: HttpClient,
  ) {
  }
  public postHttp(data, type, token) {
    return this.http.post(type, data, {headers: this.headers});
  }
  public getHttp(url) {
    return this.http.get(url, {headers: this.headers});
  }
}
