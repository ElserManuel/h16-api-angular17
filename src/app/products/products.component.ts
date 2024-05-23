import { Component, OnInit, inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HttpClientModule], 
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'] 
})
export class ProductsComponent implements OnInit {
  private productsService = inject(ProductsService);

  ngOnInit(): void {
    this.productsService.list()
      .subscribe(products => {
        console.log(products);
      });
  }
}
