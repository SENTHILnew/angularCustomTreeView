import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: any[], filedName: string): any[] {
    const array: any[] = value.sort((a: any, b: any): number => {
      return a[filedName] > b[filedName] ? 1 : -1;
    });
    return array;
  }

}
