import { Pipe, PipeTransform } from '@angular/core';
import { Song } from '../song';
import { SONGS } from '../mock-songs';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg:any): any {
    const resultSong = [];
    for(const song of SONGS){
      if(song.title.indexOf(arg)> -1){
        resultSong.push(song);
      }

    }
    return resultSong;
  }

}
