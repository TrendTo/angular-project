import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataloadInterface } from '../interface/data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataloadService {

  data: DataloadInterface = {};
  equipo: any[] = [];

  constructor(private http: HttpClient) {
    this.dataLoad();
    this.teamLoad();
  }

  private dataLoad() {
    this.http.get("assets/data/info_page.json")
      .subscribe((resp: DataloadInterface) => {
        this.data = resp;
      });
  }

  private teamLoad(){
    this.http.get("https://angulartest-95516.firebaseio.com/equipo.json")
      .subscribe((resp: any[])  => {
        this.equipo = resp;
        console.log(resp);
      });
  }
}
