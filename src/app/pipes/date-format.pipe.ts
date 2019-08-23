import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string) {
    let date = value.split('-')[1].split(" ");
    return `${date[2]} ${date[1]}, ${date[3]}`;
  }

}
