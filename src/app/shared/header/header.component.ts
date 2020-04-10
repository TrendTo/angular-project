import { Component, OnInit } from '@angular/core';
import { DataloadService } from '../../service/dataload.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _data: DataloadService) { }

  ngOnInit(): void {
  }

}
