import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../../service/product/product.service';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  keyword: string;
  titleFilter: FormControl = new FormControl();
  imgUrl = 'http://placehold.it/320x150';

  constructor(private productService: ProductService) {
    this.titleFilter.valueChanges
      .debounceTime(300)
      .subscribe(value => this.keyword = value);
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}



