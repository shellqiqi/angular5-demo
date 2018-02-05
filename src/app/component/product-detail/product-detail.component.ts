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
  newRating = 5;
  newComment: string;
  isCommentHidden = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const productId = +this.route.snapshot.paramMap.get('productId');
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentForProductId(productId);
  }

  addComment($event) {
    const comment = new Comment(0, this.product.id, new Date().toString(), 'Someone', this.newRating, this.newComment);
    this.comments.unshift(comment);
    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
    this.product.rating = this.comments.reduce((sum, element) => sum + element.rating, 0) / this.comments.length;
  }
}
