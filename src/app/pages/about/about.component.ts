import { Component, OnInit } from '@angular/core';
import { DataloadService } from '../../service/dataload.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public _load: DataloadService) {}

  ngOnInit(): void {
  }

}
