import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor( public _producto: ProductoService) { }

  ngOnInit(): void {
  }

}
