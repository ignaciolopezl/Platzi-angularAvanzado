import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './../../../producto.model';
import {environment} from '../../../../environments/environment'
import {Observable, throwError} from 'rxjs';
import {map, catchError ,retry} from 'rxjs/operators';
import * as Sentry from "@sentry/angular";
interface User {
  email: string;
  gender: string;
  phone: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductosService {

  constructor(private http : HttpClient) {
    
  }

  getAllProductos() {
    return this.http.get<Producto[]>(`${environment.url_api}/products/`);
  }
  getProducto(id: string) {
    return this.http.get<Producto>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Producto) {
    return this.http.post(`${environment.url_api}/products`, product);
  }

  updateProduct(id: string, changes: Partial<Producto>) {
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
  getRandomUsers(): Observable <User[]> {
    return this.http.get('https://randomuser.me/api/?results=2')
    .pipe(
      retry(3),
      catchError(this.handlerError),
      map((Response: any) => Response.results as User[])
    );
  }

getFile(){
  return this.http.get('assets/files/test.txt', {responseType : 'text'});
}
  
private handlerError(error : HttpErrorResponse){
  console.log(error);
  Sentry.captureException(error);
  return throwError('algo fallo');
}

} 
