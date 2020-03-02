import { Component, OnInit, ViewChild, Input, Inject } from '@angular/core';
import { Song } from '../../clases/song';
import { ReproducerComponent } from '../reproducer/reproducer.component';
import { FirebaseService } from '../../services/firebase.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material";
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit {
  
  @Input() songs: Song;

  @ViewChild(ReproducerComponent, {static: false}) player:ReproducerComponent ;

  selectedSong: Song;
  playedSong: Song;
  filterSongs: string;
  searchValue: string;
  
  constructor(
    public firebaseService: FirebaseService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    console.log('songs: ' + this.songs);
  }

  onSelect(song: Song): void {
    this.selectedSong = song;
  }

  onPlay(song: Song): void {
    this.playedSong = song;
    this.player.onStop();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '740px',
      data: {}
    });

    let idListArray = [];
    //Recogemos todos los elementos mat-list-item
    let idList = document.querySelectorAll(".mat-list mat-list-item");
    //Recorremos los elementos, obtenemos su atributo id, y lo guardamos en el array idListArray
    idList.forEach(item => {
      idListArray.push(parseInt(item.getAttributeNode('id').value));
    });
    // pasamos el valor countList al modal
    let instance = dialogRef.componentInstance;
    //Averiguamos de todos los números del array cuan es el más alto
    instance.countList = idListArray.reduce ( (prev, curr) => prev > curr ? prev : curr);
  }

  searchByName(event){
    this.filterSongs = event;
  }
}