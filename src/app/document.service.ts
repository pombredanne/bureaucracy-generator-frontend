import { Injectable } from '@angular/core';
import {Utils} from './utils';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) { }
  getPrivacyPolicyDocument() {
    const url = Utils.baseBackendUrl + '/document';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=utf8', 'Accept': 'application/json;charset=utf-8'
    });
    let params = new HttpParams();
    params = params.append('type', '0');
    return this.http.get(url, {params: params, headers: headers, observe: 'response', responseType: 'text' as 'json'});
  }
}
