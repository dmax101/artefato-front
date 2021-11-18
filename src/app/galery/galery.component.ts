import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/model/product.model';
import { ProductService } from '../shared/service/product.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {

  public products: Product[] = [];

  constructor(
    public productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAllProducts().subscribe(
      data => {
        this.products = data;
        
        console.log(this.products);
        
      }
    );
  }

}
