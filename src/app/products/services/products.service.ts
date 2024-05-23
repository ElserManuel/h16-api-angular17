import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private http = inject(HttpClient);

  list() {
    return this.http.get('https://8f7c-170-246-58-250.ngrok-free.app/H16-Api-SpringBoot/api/products');
  }

  get(productsid: number) {
    return this.http.get(`https://8f7c-170-246-58-250.ngrok-free.app/H16-Api-SpringBoot/api/products/${productsid}`);
  }

  create(products: any) {
    return this.http.post(`https://8f7c-170-246-58-250.ngrok-free.app/H16-Api-SpringBoot/api/products`, products);
  }

  update(productsid: number, products: any) {
    return this.http.put(`https://8f7c-170-246-58-250.ngrok-free.app/H16-Api-SpringBoot/api/products/${productsid}`, products);
  }

  delete(productsid: number) {
    return this.http.delete(`https://8f7c-170-246-58-250.ngrok-free.app/H16-Api-SpringBoot/api/products/${productsid}`);
  }
}
