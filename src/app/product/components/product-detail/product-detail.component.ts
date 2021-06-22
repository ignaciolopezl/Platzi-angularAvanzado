import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductosService } from './../../../core/services/productos/productos.service';
import { Producto } from './../../../producto.model';
import {switchMap} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$: Observable<Producto>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductosService
  ) { }

  ngOnInit() {
    this.product$ = this.route.params
    .pipe(
      switchMap((params: Params) => {
        return this.productsService.getProducto(params.id)
      })
    );
  }


  createProduct() {
    const nuevoProducto: Producto = {
      id: '123',
      title: 'nuevo producto',
      image: 'assets/images/banner-1.jpg',
      price: 11000,
      description: 'nuevo producto'
    };
    this.productsService.createProduct(nuevoProducto)
    .subscribe(product => {
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Producto> = {
      price: 1234,
      description: 'nuevo titulo'
    };
    this.productsService.updateProduct('2', updateProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct() {
    this.productsService.deleteProduct('123')
    .subscribe(rta => {
      console.log(rta);
    });
  }

  getRandomUsers(){
    this.productsService.getRandomUsers()
    .subscribe(users => {
      console.log(users);
    },
    error => {
      console.error(error);
    }
    );
  }

  getFile(){
    this.productsService.getFile()
    .subscribe(content => {
      console.log(content);
    }

    );
  }

}
