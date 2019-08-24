import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hashtagLimit'
})
export class HashtagLimitPipe implements PipeTransform {

  transform(hashtags: any[]): any {
    if(hashtags.length > 2){
      return `${hashtags[0]}, ${hashtags[1]}`;
    }else{
      return hashtags;
    }
  }

}
