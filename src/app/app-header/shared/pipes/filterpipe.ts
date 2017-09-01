/**
 * Created by Isingh on 8/29/2017.
 */
import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'filter'
})
export class filterpipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString == null) {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
