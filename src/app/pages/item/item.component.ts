import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../service/producto.service';
import { ItemProducto } from '../../interface/item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemValue : ItemProducto;
  cod: String;

  constructor(
    private route: ActivatedRoute,
    public producto:ProductoService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      parametros => {
        this.producto.getProducto(parametros['cod']).subscribe(
          (resp: ItemProducto) => {
            this.cod=parametros['cod'];
            this.itemValue=resp;
            console.log(resp);
          }
        );
      }
    );
  }

}
