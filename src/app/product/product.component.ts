import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;
  private imgUrl = 'http://placehold.it/320x150';

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 1.99, 3.5, '第一个商品的描述', ['类别1', '类别2']),
      new Product(2, '第二个商品', 2.99, 2.5, '第二个商品的描述', ['类别2', '类别3']),
      new Product(3, '第三个商品', 3.99, 1.5, '第三个商品的描述', ['类别3', '类别4']),
      new Product(4, '第四个商品', 4.99, 4.5, '第四个商品的描述', ['类别4', '类别5']),
      new Product(5, '第五个商品', 5.99, 3.5, '第五个商品的描述', ['类别5', '类别6']),
      new Product(6, '第六个商品', 6.99, 2.5, '第六个商品的描述', ['类别6', '类别7'])
    ];
  }
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {
  }
}

