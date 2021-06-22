import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './../../../producto.model';
import { CartService } from './../../../core/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})

export class OrderComponent implements OnInit {


  products$: Observable<Producto[]>;

  constructor(private cartService: CartService) {
    this.products$ = this.cartService.cart$;
  }

  ngOnInit() {
    //code
  }
}
