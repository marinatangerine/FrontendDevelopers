import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from 'src/app/song';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  @Input() song: Observable<Song>;

  constructor() { }

  ngOnInit() {
  }

}
