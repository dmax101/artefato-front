import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../shared/model/product.model';
import { Purchase } from '../shared/model/purchase.model';
import { ProductService } from '../shared/service/product.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {

  public products: Product[] = [];

  public pixImage = "";
  public paymentInfoIsHidden = true;

  constructor(
    public productService: ProductService,
    private _snackBar: MatSnackBar
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

  togglePaymentInfoVisibility() {
    this.paymentInfoIsHidden = !this.paymentInfoIsHidden;
  }

  getPaymentInfo(product: Product) {

    if (!product.isAvailable) {
      this._snackBar.open("O produto não está disponível para compra!")._dismissAfter(2000);
    } else {
      this.paymentInfoIsHidden = false;

      console.log(product);
      
      const purchase = new Purchase("b859a7b5-0ddf-4558-8e36-d5c8bfa1de2d", product.id);

      this.productService.purchaseProduct(purchase).subscribe(
        data => {
          this.pixImage = data.paymentInfo.qrbase64;
        }
      );
    }
  }

}
