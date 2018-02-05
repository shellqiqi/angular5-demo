import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product/product.service';
import { Product } from '../../domain/product';
import { Comment } from '../../domain/comment';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  comments: Comment[];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const productId = +this.route.snapshot.paramMap.get('productId');
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentForProductId(productId);
  }
}
