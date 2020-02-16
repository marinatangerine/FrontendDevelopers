import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Song } from 'src/app/song';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
    //usamos función del padre
    @Output() filter: EventEmitter<any> = new EventEmitter<any>();
    
    filterBySongName(songName){
      console.log(`emit value: ${songName}`)
      this.filter.emit(songName);
    }

  ngOnInit() {
  }

}
