import { Component, OnInit } from '@angular/core';
import { DataloadService } from '../../service/dataload.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  anio: number = new Date().getFullYear();

  constructor(public _data: DataloadService) { }

  ngOnInit(): void {
  }

}
