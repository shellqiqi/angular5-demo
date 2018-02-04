import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../service/product/product.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: Product[], filterField: string, keyword: string): Product[] {
    if (!filterField || !keyword) { return list; }
    return list.filter((item: Product) => {
      const fieldValue = item[filterField];
      return fieldValue.indexOf(keyword) >= 0;
    });
  }

}
