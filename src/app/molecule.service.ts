import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MoleculeService {
d=[];
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.post('http://poc.molecularconnections.com/Tree/getTerm')
    .subscribe(res => console.log(res));
    
  }

}
