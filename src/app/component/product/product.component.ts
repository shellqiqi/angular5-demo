import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../service/product/product.service';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { Product } from '../../domain/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  // keyword: string;
  // titleFilter: FormControl = new FormControl();
  imgUrl = 'http://placehold.it/320x150';

  constructor(private productService: ProductService) {
    // this.titleFilter.valueChanges
    //   .debounceTime(300)
    //   .subscribe(value => this.keyword = value);
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(p => this.products = p);
    this.productService.searchEvent.subscribe(
      params => this.productService.search(params).subscribe(
        p => this.products = p
      )
    );
  }
}



