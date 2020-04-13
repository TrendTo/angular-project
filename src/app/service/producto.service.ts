import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interface/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: Producto[] = [];
  busqueda: Producto[] = [];
  cargando = true;

  constructor(private http: HttpClient) {
    this.productoLoad();
  }
  private productoLoad() {

    return new Promise((resolve, reject) => {
      this.http.get('https://angulartest-95516.firebaseio.com/productos_idx.json')
        .subscribe((resp: Producto[]) => {
          this.productos = resp;
          setTimeout(() => {
            this.cargando = false;
          }, 1500);
          resolve();
        });
    });
  }

  getProducto(cod: String) {
    return this.http.get(`https://angulartest-95516.firebaseio.com/productos/${cod}.json`);
  }

  getBusqueda(palabra: string) {
    if (this.productos.length === 0) {
      this.productoLoad().then(()=>{
        this.productosFiltrados(palabra);
      });
    } else {
      this.productosFiltrados(palabra);
    }
  }

  private productosFiltrados(palabra: string){
    this.busqueda = [];
    palabra=palabra.toLocaleLowerCase();

    this.productos.forEach(
      list =>{
        const lowerC = list.categoria.toLocaleLowerCase();
        const lowerT = list.titulo.toLocaleLowerCase();
        if (lowerC.indexOf(palabra)>=0 || lowerT.indexOf(palabra)>=0) {
          this.busqueda.push(list);
        }
      }
    );
  }

}
