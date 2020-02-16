import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Song } from '../../song';
import { ReproducerComponent } from '../reproducer/reproducer.component';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit {
  
  @Input() songs: Observable<Song>;

  @ViewChild(ReproducerComponent, {static: false}) player:ReproducerComponent ;

  selectedSong: Song;
  playedSong: Song;
  filterSongs: object;
  searchValue: string;
  

  constructor(
    public firebaseService: FirebaseService
  ) { }

  ngOnInit() {
  }

  onSelect(song: Song): void {
    this.selectedSong = song;
  }

  onPlay(song: Song): void {
    this.playedSong = song;
    this.player.onStop();
  }

  /*searchByName(event){
    console.log(`filter: ${event}`);
    /*let value = this.searchValue.toLowerCase();
    this.firebaseService.searchSongs(value)
    .subscribe(result => {
      this.filterSongs = result;
    })
  }*/

  

  searchByName(event){
    let value = event.toLowerCase();
    console.log(`filter: ${value}`);
    this.firebaseService.searchSongs(value)
    .subscribe(result => {
      this.filterSongs = result;
    })
    console.log(this.filterSongs);
  }
}