import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../models/Article';

@Pipe({
  name: 'filterBySection'
})
export class FilterBySectionPipe implements PipeTransform {

  transform(list: Article[], sections: string[]): Article[] {
    if (sections.length === 0) return list;
    return list.filter(item => sections.includes(item.section));
  }

}
