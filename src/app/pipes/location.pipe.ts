import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'location'
})
export class LocationPipe implements PipeTransform {

  transform(items: any[], filter: any): any {
    if (!items || !filter) {
      return items;
    }
    if (filter.length === 0) {
      return items;
    }
    const result = [];

    items.forEach(item => {
      if ((filter !== '') && (filter === item.location)) {
        result.push(item);
      }
    });
    return result;
  }

}
