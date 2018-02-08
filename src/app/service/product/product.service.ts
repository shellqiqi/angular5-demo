import {EventEmitter, Injectable} from '@angular/core';
import { Product } from '../../domain/product';
import { Comment } from '../../domain/comment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductService {

  searchEvent: EventEmitter<ProductSearchParams> = new EventEmitter<ProductSearchParams>();

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>('/api/product/' + id);
  }

  getAllCategories(): string[] {
    return ['类别1', '类别2', '类别3', '类别4', '类别5', '类别6', '类别7'];
  }

  getCommentForProductId(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>('/api/product/' + id + '/comments');
  }

  search(params: ProductSearchParams): Observable<Product[]> {
    console.log(this.encodeParams(params).toString());
    return this.http.get<Product[]>('/api/products', {params: this.encodeParams(params)});
  }

  encodeParams(params): HttpParams {
    return Object.keys(params)
      .filter(key => params[key])
      .reduce((sum: HttpParams, key: string) => {
      sum = sum.append(key, params[key]);
      return sum;
    }, new HttpParams());
  }
}

export class ProductSearchParams {
  constructor(
    public title: string,
    public price: number,
    public category: string
  ) {}
}
