import { Pipe, PipeTransform } from '@angular/core';
import { Song } from '../song';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg: any[]): any {
    const resultSong = [];
    for(const search of value){
      if(search.title.indexOf(arg)> -1){
        resultSong.push(search);
      }

    }
    return resultSong;
  }

}
