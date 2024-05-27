import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../common/product';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{

  products!:Product[];
  currentCategoryId!: number | null;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params  => {
        this.currentCategoryId = Number(params.get('id'));
        console.log(this.currentCategoryId)
        this.listProducts();
      }
    );
  }

  listProducts(){
    if (!this.route.snapshot.paramMap.has('id')) {
      this.currentCategoryId = 1;
    }
    this.productService.getProductList(this.currentCategoryId).subscribe(
      products => this.products = products
    )
  }
}
