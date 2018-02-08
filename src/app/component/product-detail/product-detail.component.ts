import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product/product.service';
import { Product } from '../../domain/product';
import { Comment } from '../../domain/comment';
import {WebSocketService} from '../../service/web-socket/web-socket.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  isWatched = false;
  currentBid: number;
  product: Product;
  comments: Comment[];
  newRating = 5;
  newComment: string;
  isCommentHidden = true;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private wsService: WebSocketService
  ) {}

  ngOnInit() {
    const productId = +this.route.snapshot.paramMap.get('productId');
    this.productService.getProduct(productId).subscribe(p => {
      this.product = p;
      this.currentBid = this.product.price;
    });
    this.productService.getCommentForProductId(productId).subscribe(c => this.comments = c);
  }

  addComment($event) {
    const comment = new Comment(0, this.product.id, new Date().toString(), 'Someone', this.newRating, this.newComment);
    this.comments.unshift(comment);
    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
    this.product.rating = this.comments.reduce((sum, element) => sum + element.rating, 0) / this.comments.length;
  }

  watchProduct() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.isWatched = false;
      this.subscription = null;
    } else {
      this.isWatched = true;
      this.subscription =
        this.wsService.createObservableSocket('ws://localhost:8085', this.product.id)
          .subscribe(
            data => {
              const dataObjs = JSON.parse(data) as {productId: number, bid: number}[];
              const result = dataObjs.find(obj => obj.productId === this.product.id);
              this.currentBid = result.bid;
            },
            error => console.log(error),
            () => console.log('complete')
          );
    }
  }
}
