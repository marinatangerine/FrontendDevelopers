import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  title = 'I Want to Break Free';
  album = 'The Works';
  author = 'Queen';
  style = 'Rock';
  year = '1984';
  duration = '05:00';
  description = 'Cuando I Want To Break Free fue lanzado como single en 1984, fue otro éxito para Queen, número 3 en las listas británicas. La canción llegó al Top 10 en la mayoría de las listas de éxitos del mundo, incluso llegó al primer lugar en países como Austria, Bélgica y Holanda…';
  picture = './../../../assets/img/queen.jpg';
  constructor() { }

  ngOnInit() {
  }

}
