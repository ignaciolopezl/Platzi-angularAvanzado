import { Component, OnInit } from '@angular/core';
import { Producto } from '../../producto.model';
import { ProductosService } from '@core/services/productos/productos.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss']
})
export class ProductsContainer implements OnInit {

  products: Producto[] = [
  ];

  constructor(private productosService : ProductosService) { 
    //code
  }

  ngOnInit() {
    this.fetchProductos();
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }
  fetchProductos(){
    this.productosService.getAllProductos()
    .subscribe(products => {
      this.products = products;
      console.log(products);
    })
  }

}
