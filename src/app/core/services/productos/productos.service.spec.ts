import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { ProductosService } from './productos.service';

import { environment } from './../../../../environments/environment';

fdescribe('ProductsService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('tests for getAllProducts', () => {
    it('sholud return products', () => {
      // arrange - preparar
      const expectData = [
        {
          id: '1234',
          title: 'test',
          price: 125,
          description: 'text',
          image: 'img/img.jpg',
        },
        {
          id: '1236',
          title: 'test',
          price: 125,
          description: 'text',
          image: 'img/img.jpg',
        },
      ];

      let dataError;
      let dataResponse;

      // act - actuacion
      service.getAllProductos().subscribe(
        (response) => {
          dataResponse = response;
        },
        (err) => {
          dataError = err;
        }
      );

      const req = httpTestingController.expectOne(
        `${environment.url_api}/products`
      );
      req.flush(expectData);

      // assert
      expect(dataResponse.length).toEqual(2);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();
    });
  });
});