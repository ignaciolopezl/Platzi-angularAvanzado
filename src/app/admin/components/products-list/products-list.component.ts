import { Component, OnInit } from '@angular/core';
import {ProductosService} from './../../../core/services/productos/productos.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor(
    private productosService : ProductosService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  
  fetchProducts() {
    this.productosService.getAllProductos()
    .subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string) {
    this.productosService.deleteProduct(id)
    .subscribe(rta => {
      this.fetchProducts();
    });
  }
}
