import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../../common/product';
import { environment } from '../../../environments/environment';
import { GetResponseProducts } from '../../common/get-response.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProductList(theCategoryId : number | null): Observable<Product[]> {

    const searchUrl = `${environment.productsURL}/search/findByCategoryId?id=${theCategoryId}`;
    console.log(searchUrl);
    

    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

