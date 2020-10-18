import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MoleculeService {

  

  constructor(private http: HttpClient) { }

  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };
  url = 'http://poc.molecularconnections.com/Tree/getTerm'

  getData(level){
    const body = new HttpParams()
    .set('level', level)
    return this.http.post(this.url,body, this.requestOptions)
  }
}
