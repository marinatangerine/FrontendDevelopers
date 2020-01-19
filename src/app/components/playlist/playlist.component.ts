import { Component, OnInit } from '@angular/core';
import { Song } from '../../song';
import { SONGS } from '../../mock-songs';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  songs = SONGS;
  selectedSong: Song;
  
  constructor() { }

  ngOnInit() {
  }

  onSelect(song: Song): void {
    this.selectedSong = song;
  }

}
