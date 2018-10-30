import { Injectable } from '@angular/core';
import {Utils} from './utils';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) { }
  getPrivacyPolicyDocument(website, mobileApp, entityType, businessName, businessLocation, websiteUrl, websiteName, mobileAppName,
                           collectEmail, collectFirstAndLastName, collectPhoneNumber, collectAddress, askForUserLocation, useAnalytics,
                           canContactByEmail, canContactByPhone, canContactByWebsite, contactEmail, contactPhone, contactWebsite) {
    const url = Utils.baseBackendUrl + '/documents/privacyPolicy';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=utf8', 'Accept': 'application/json;charset=utf-8'
    });
    let params = new HttpParams();
    params = params.append('website', website);
    params = params.append('mobileApp', mobileApp);
    params = params.append('entityType', entityType);
    params = params.append('businessName', businessName);
    params = params.append('businessLocation', businessLocation);
    params = params.append('websiteUrl', websiteUrl);
    params = params.append('websiteName', websiteName);
    params = params.append('mobileAppName', mobileAppName);
    params = params.append('collectEmail', collectEmail);
    params = params.append('collectFirstAndLastName', collectFirstAndLastName);
    params = params.append('collectPhoneNumber', collectPhoneNumber);
    params = params.append('collectAddress', collectAddress);
    params = params.append('askForUserLocation', askForUserLocation);
    params = params.append('useAnalytics', useAnalytics);
    params = params.append('canContactByEmail', canContactByEmail);
    params = params.append('canContactByPhone', canContactByPhone);
    params = params.append('canContactByWebsite', canContactByWebsite);
    params = params.append('contactEmail', contactEmail);
    params = params.append('contactPhone', contactPhone);
    params = params.append('contactWebsite', contactWebsite);
    return this.http.get(url, {params: params, headers: headers, observe: 'response', responseType: 'text' as 'json'});
  }
}
