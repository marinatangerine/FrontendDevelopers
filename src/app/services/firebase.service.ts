import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Song } from '../clases/song';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  constructor(public db: AngularFirestore) {}
  
  songDoc: AngularFirestoreDocument<Song[]>;

  getSongs(){
    return this.db.collection('/songs').valueChanges({idField: 'songId'})
  }

  updateDetail(song: Song, field: string, text: string){
    let songDetails = this.db.doc(`/songs/${song.songId}`);
    songDetails.set({
      [field]: [text]
    })
  }

}