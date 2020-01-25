import { Component, OnInit, ViewChild } from '@angular/core';
import { Song } from '../../song';
import { SONGS } from '../../mock-songs';
import { ReproducerComponent } from '../reproducer/reproducer.component'

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  @ViewChild(ReproducerComponent, {static: false}) player:ReproducerComponent ;

  songs = SONGS;
  selectedSong: Song;
  playedSong: Song;
  
  constructor() { }

  ngOnInit() {
  }

  onSelect(song: Song): void {
    this.selectedSong = song;
  }

  onPlay(song: Song): void {
    this.playedSong = song;
  }

}
