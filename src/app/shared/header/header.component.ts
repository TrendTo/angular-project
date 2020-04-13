import { Component, OnInit } from '@angular/core';
import { DataloadService } from '../../service/dataload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public _data: DataloadService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  buscarItem( palabra: String){
    if (palabra.length < 1) {
      return;
    }
    this.router.navigate(['/buscar',palabra]);
  }

}
