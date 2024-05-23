import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { productsCambio } from '../model/productsCambio';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private http = inject(HttpClient);

  list(){
    return this.http.get<productsCambio[]>('http://localhost:8085/H16-Api-SpringBoot/v1/products');
  }
  
  get (productsid: number){
    return this.http.get<productsCambio>(`http://localhost:8085/H16-Api-SpringBoot/v1/products/${productsid}`);
  }

  create (products: any){
    return this.http.post<productsCambio>('http://localhost:8085/H16-Api-SpringBoot/v1/products', products);
  }

  update (productsid: number, products:any){
    return this.http.put<productsCambio>(`http://localhost:8085/H16-Api-SpringBoot/v1/products/${productsid}`,products);
  }
  
  delete(productsid: number){
    return this.http.delete<void>(`http://localhost:8085/H16-Api-SpringBoot/v1/products/${productsid}`);
  }
}
