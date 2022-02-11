import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class NetworkserviceService {

  url = 'http://localhost:2133/';  // URL to web api
  constructor(private http: HttpClient) {
  }

  /** GET list of interfaces */
  scan(): Observable<WirelessNetwork[]> {
    return this.http.get<WirelessNetwork[]>(this.url).pipe(map((res => {
        return Object.values(res);
      }
    )))
  }
}

export interface WirelessNetwork {
  description: String,
  mode: String,
  internalName: String,
  externalName: String
}
