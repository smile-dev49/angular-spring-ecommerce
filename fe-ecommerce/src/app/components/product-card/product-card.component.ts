import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../common/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  template: `
      <div class="product-box ">
          <a routerLink="/products/{{product.id}}">
              <img src="{{product.imageUrl}}" alt="{{product.name}}" class="img-responsive">
          </a>
          <a class="d-block" routerLink="/products/{{product.id}}">
              <h1 >{{product.name}}</h1>
          </a>
          <div class="price">{{product.unitPrice | currency:'USD'}}</div>
          <a href="#" class="primary-btn">Add to cart</a>
      </div>
  `,
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  product : Product = input.required<Product>();
  // @Input({required:true}) product! : Product;

  constructor(){
    console.log(this.product);
    
  }
}
