import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../common/product';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { debounce, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
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
        this.listProducts();
      }
    );
  }

  listProducts(){
    if (!this.route.snapshot.paramMap.has('id')) {
      this.currentCategoryId = 1;
    }
    if(this.route.snapshot.paramMap.has('keyword')){
      console.log('search...')
      this.handleSearchProducts();
    }
    else{
      this.handleListProducts();
    }
    
  }

  handleListProducts(){
    this.productService.getProductList(this.currentCategoryId).subscribe(
      products => this.products = products
    )
  }

  handleSearchProducts(){
    const theKeyWord: string|null = this.route.snapshot.paramMap.get('keyword');
    console.log(theKeyWord);
    
    this.productService.getProductSearchList(theKeyWord)
    .subscribe(
      products => this.products = products
    )
  }
}
