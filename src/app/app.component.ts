import { Component } from '@angular/core';
import { DataloadService } from './service/dataload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'angular-app';
  constructor (public DataloadService: DataloadService){}
}
