import { Injectable } from '@angular/core';
import { Product } from '../../domain/product';
import { Comment } from '../../domain/comment';

@Injectable()
export class ProductService {

  private products: Product[] = [
    new Product(1, '第一个商品', 1.99, 3.5, '第一个商品的描述', ['类别1', '类别2']),
    new Product(2, '第二个商品', 2.99, 2.5, '第二个商品的描述', ['类别2', '类别3']),
    new Product(3, '第三个商品', 3.99, 1.5, '第三个商品的描述', ['类别3', '类别4']),
    new Product(4, '第四个商品', 4.99, 4.5, '第四个商品的描述', ['类别4', '类别5']),
    new Product(5, '第五个商品', 5.99, 3.5, '第五个商品的描述', ['类别5', '类别6']),
    new Product(6, '第六个商品', 6.99, 2.5, '第六个商品的描述', ['类别6', '类别7'])
  ];

  private comments: Comment[] = [
    new Comment(1, 1, '2017-1-1', '张三', 4.5, '东西不错'),
    new Comment(2, 1, '2017-1-2', '张四', 2.5, '东西还不错'),
    new Comment(3, 1, '2017-1-3', '王五', 3.5, '东西可以'),
    new Comment(4, 2, '2017-1-4', '李四', 1.5, '东西还可以')
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product: Product): boolean => product.id === id);
  }

  getAllCategories(): string[] {
    return ['类别1', '类别2', '类别3', '类别4', '类别5', '类别6', '类别7'];
  }

  getCommentForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment): boolean => comment.productId === id);
  }
}
