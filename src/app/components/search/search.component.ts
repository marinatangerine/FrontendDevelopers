import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Song } from '../../clases/song';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {



  constructor() { }
    //usamos función del padre
    @Output() filter: EventEmitter<any> = new EventEmitter<any>();
    @Input() songs: Song;
    
    filterBySongName(songName){
      console.log(`emit value: ${songName}`)
      this.filter.emit(songName);
    }
    myControl = new FormControl();
    
    filteredOptions: Observable<string[]>;
    options:string[] = [];

    fillOptionsArray(object){
      object.map(item => {
        this.options.push(item.title);
      })
    }

    ngOnInit() {
      this.fillOptionsArray(this.songs);
      
      this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filter(value))
          );
      }
      
    
      private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
    
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
      }
  
    }
