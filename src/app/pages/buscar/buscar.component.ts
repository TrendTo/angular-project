import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public producto: ProductoService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      valor => {
        this.producto.getBusqueda(valor['palabra']);
      }
    );
  }

}
