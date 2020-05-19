import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(elementsList: any, searchTerm: any): any {
    if (searchTerm === undefined) return elementsList;

    return elementsList.filter(function(element: any){
      return element.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
}
