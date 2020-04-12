import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interface/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: Producto[] = [];
  cargando= true;

  constructor(  private http: HttpClient) {
    this.productoLoad();
  }
  private productoLoad(){
    this.http.get('https://angulartest-95516.firebaseio.com/productos_idx.json')
    .subscribe( (resp : Producto[]) =>{
      this.productos = resp;
      setTimeout(() => {
        this.cargando = false;  
      }, 1500);
    });
  }

  getProducto(cod: String){
    return this.http.get(`https://angulartest-95516.firebaseio.com/productos/${cod}.json`);
  }
}
