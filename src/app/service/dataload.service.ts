import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataloadInterface } from '../interface/data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataloadService {

  data: DataloadInterface = {};

  constructor( private http: HttpClient) {
    this.http.get("assets/data/info_page.json")
    .subscribe( (resp: DataloadInterface) => {
      this.data = resp
      console.log(resp);
    });
  }
}
